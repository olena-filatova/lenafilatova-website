// Anti-spam guard shared by the contact form and the newsletter form (OPS-235).
//
// Both forms POST to the same Google Apps Script endpoint. Until now that
// endpoint URL sat in the served HTML as a plain `action` attribute and the
// script accepted anything that arrived, so a scraper only had to read the
// page once and could then POST straight to the endpoint forever.
//
// Three layers here, all client side:
//   1. the endpoint is assembled at runtime, so no literal script.google.com
//      URL appears in the HTML for a harvester to regex out;
//   2. a honeypot field that a human never sees and never fills;
//   3. a load timestamp plus a checksum over it, which together prove that
//      the page's JavaScript actually ran and that a human spent a plausible
//      amount of time on the form.
//
// IMPORTANT: layers 2 and 3 only bite once the Apps Script *checks* them.
// The matching server-side code lives in docs/apps-script-form-guard.js and
// has to be pasted into the Apps Script project by hand — this repo cannot
// deploy it. Until that is done, this file is only layer 1.

// Split so the assembled URL never appears as one literal string.
const ENDPOINT_ID =
  'AKfycbw21p8PuG5jGQ7JXf7j-tX1-' + 'OZBeA1p6negAuzi7TmiyPkjEoshxLbtGc6avUVskGiK';

export const HONEYPOT = 'website';
export const MIN_DWELL_MS = 3000;

export function endpointUrl() {
  return `https://script.google.com/macros/s/${ENDPOINT_ID}/exec`;
}

// A cheap keyed checksum (FNV-1a) over the load timestamp. This is not a
// secret — anyone reading this bundle can recompute it — but producing it
// requires running the page's JavaScript, which the overwhelming majority of
// form spam does not. Apps Script is JavaScript too, so the server-side copy
// of this function is character-for-character identical.
export function guardToken(ts) {
  const s = `lf-form-guard:${ts}`;
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
}

// Wire a form up: remember when it was rendered, and attach the guard fields
// at submit time. Returns false if the submission looks automated, in which
// case the caller should pretend it succeeded rather than say why.
export function armForm(form) {
  const loadedAt = Date.now();
  form.action = endpointUrl();

  return function collect() {
    const trap = form.querySelector(`[name="${HONEYPOT}"]`);
    if (trap && trap.value) return null; // a human never fills this in
    if (Date.now() - loadedAt < MIN_DWELL_MS) return null; // too fast to be typed

    const body = new URLSearchParams(new FormData(form));
    body.delete(HONEYPOT);
    body.set('ts', String(loadedAt));
    body.set('token', guardToken(loadedAt));
    return body;
  };
}
