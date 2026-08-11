// Anti-spam guard shared by the contact form (ContactBody) and the newsletter
// form (HomeBody). Everything here runs in the browser.
//
// Why this exists: both forms post to a public Google Apps Script endpoint
// (see src/data/site.js). Bots were harvesting the endpoint straight out of the
// page's `action` attribute and POSTing to it, which is why Lena's inbox filled
// with spam. Three layers push back:
//
//   1. The endpoint is no longer in the HTML. Forms ship with no `action`; the
//      URL is base64-encoded here and only assembled at submit time. HTML
//      scrapers find nothing to POST to.
//   2. Honeypot + time trap + submit-rate cap catch scripted fillers that do
//      execute JS.
//   3. Content heuristics drop the classic link-stuffed SEO/casino payloads.
//
// A blocked submission still shows the normal "thanks" confirmation so bots get
// no signal about what tripped them.
//
// NOTE: this cannot stop a bot that already knows the endpoint URL and posts to
// it directly. The durable fix is a matching check inside the Apps Script —
// see docs/contact-form-spam.md for the snippet to paste there.

// base64 of the Apps Script endpoint — kept out of the HTML on purpose.
const ENDPOINT_B64 =
  'aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J3MjFwOFB1RzVqR1E3SlhmN2otdFgxLU9aQmVBMXA2bmVnQXV6aTdUbWl5UGtqRW9zaHhMYnRHYzZhdlVWc2tHaUsvZXhlYw==';

const HONEYPOT_NAME = 'website';
const MIN_FILL_MS = 3000; // humans need at least a few seconds to fill a form
const MAX_PER_HOUR = 3;
const RATE_KEY = 'lf_form_sent';

const LINK_RE = /(https?:\/\/|www\.|\[url|<a\s)/i;
const SPAM_RE = /\b(seo services|casino|crypto|bitcoin|viagra|cialis|porn|escort|backlinks?|guest post|payday loan)\b/i;

export function endpoint() {
  return atob(ENDPOINT_B64);
}

// Invisible to humans and to screen readers; bots that fill every field bite.
function addHoneypot(form) {
  const wrap = document.createElement('div');
  wrap.setAttribute('aria-hidden', 'true');
  wrap.style.cssText =
    'position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden';
  const input = document.createElement('input');
  input.type = 'text';
  input.name = HONEYPOT_NAME;
  input.tabIndex = -1;
  input.autocomplete = 'off';
  wrap.appendChild(input);
  form.appendChild(wrap);
}

function recentSubmits() {
  try {
    const cutoff = Date.now() - 3600_000;
    return JSON.parse(localStorage.getItem(RATE_KEY) || '[]').filter((t) => t > cutoff);
  } catch (_) {
    return [];
  }
}

function recordSubmit() {
  try {
    localStorage.setItem(RATE_KEY, JSON.stringify([...recentSubmits(), Date.now()]));
  } catch (_) {
    /* private mode — rate cap just doesn't apply */
  }
}

// Returns true when the submission looks like spam and should be dropped.
function looksLikeSpam(form, loadedAt) {
  if (form.elements[HONEYPOT_NAME]?.value) return true;
  if (Date.now() - loadedAt < MIN_FILL_MS) return true;
  if (recentSubmits().length >= MAX_PER_HOUR) return true;

  const name = form.elements.name?.value || '';
  const message = form.elements.message?.value || '';
  if (LINK_RE.test(name)) return true;
  if (SPAM_RE.test(`${name} ${message}`)) return true;
  // One link in a message is plausible (a study, a product); a wall of them isn't.
  if ((message.match(/https?:\/\//gi) || []).length > 1) return true;

  return false;
}

/**
 * Wire a form up to the endpoint with the spam guard in front.
 *
 * @param {HTMLFormElement} form
 * @param {() => void} onDone  called after a submit attempt, spam or not
 */
export function guardForm(form, onDone) {
  const loadedAt = Date.now();
  addHoneypot(form);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    if (btn) btn.disabled = true;

    if (!looksLikeSpam(form, loadedAt)) {
      recordSubmit();
      const body = new URLSearchParams(new FormData(form));
      body.delete(HONEYPOT_NAME);
      try {
        await fetch(endpoint(), { method: 'POST', mode: 'no-cors', body });
      } catch (_) {
        /* no-cors: response is opaque, submission still goes through */
      }
    }

    onDone();
  });
}
