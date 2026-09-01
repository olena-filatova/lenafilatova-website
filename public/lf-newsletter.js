// Newsletter form submit handler — the ONE copy, shared by two consumers:
//
//   1. src/components/Newsletter.astro (every Astro page), which loads it with
//      <script is:inline defer src="/lf-newsletter.js">, the same pattern
//      CookieConsent.astro already uses for cookie-consent.js;
//   2. the standalone tool pages in public/ (OPS-303), which sit outside the
//      Astro bundle and get their newsletter block from
//      scripts/build-tool-chrome.mjs.
//
// It lives in public/ rather than src/ precisely so consumer 2 can reach it:
// a src/ module would be bundled and hashed, and a hand-written HTML file in
// public/ has no way to name the bundle. Plain script, no imports, no exports.
//
// CONVERSION TRACKING (OPS-398). A successful signup fires GA4's recommended
// `generate_lead` event with `list` and `language`, so signups can be read per
// channel and per language. Marking it a key event is a one-off click in GA4
// Admin that only Lena can make; until then it collects as an ordinary event,
// and the history is kept either way.
//
// Everything the handler needs is read off the form's own data-* attributes,
// which each consumer renders from src/data/site.js — so the copy stays in one
// place and this file never needs to know a language.
//
// Why JSONP and not fetch(): the Mailchimp post-json endpoint sends no CORS
// headers, so a normal fetch can only run no-cors — which makes the response
// unreadable and forces the form to claim success even when the signup failed.
// A JSONP <script> tag gets the real {result, msg} back, so "already
// subscribed" and genuine errors reach the visitor in their own language.
(function () {
  document.querySelectorAll('.nlform').forEach(function (form) {
    var box = form.parentElement;
    var okEl = box && box.querySelector('.nl-sent');
    var msgEl = box && box.querySelector('.nl-msg');
    var btn = form.querySelector('button[type=submit]');
    var label = btn && btn.textContent;
    var loadedAt = Date.now();

    function show(el, text) {
      if (!el) return;
      if (text) el.textContent = text;
      el.hidden = false;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (msgEl) msgEl.hidden = true;

      // Anti-spam (OPS-235). Show the normal confirmation either way so a bot
      // learns nothing from the response — it just never reaches Mailchimp.
      var trap = form.querySelector('[name="' + form.dataset.mcTrap + '"]');
      var tooFast = Date.now() - loadedAt < Number(form.dataset.mcDwell || 0);
      if ((trap && trap.value) || tooFast) {
        form.hidden = true;
        show(okEl);
        return;
      }

      if (btn) {
        btn.disabled = true;
        btn.textContent = form.dataset.mcBusy || label;
      }

      function reset() {
        if (!btn) return;
        btn.disabled = false;
        btn.textContent = form.dataset.mcBtn || label;
      }

      // JSONP: Mailchimp calls back into this uniquely-named global.
      var cb = 'mcCb' + Date.now() + Math.floor(Math.random() * 1e6);
      var params = new URLSearchParams();
      new FormData(form).forEach(function (v, k) { params.append(k, String(v)); });
      params.delete(form.dataset.mcTrap); // our honeypot; Mailchimp's own stays
      params.append('c', cb);

      var script = document.createElement('script');
      var done = false;

      function cleanup() {
        delete window[cb];
        script.remove();
      }

      window[cb] = function (res) {
        done = true;
        cleanup();
        if (res && res.result === 'success') {
          // GA4's recommended lead event (OPS-398). Until this, the site fired
          // no conversion of any kind — 815 events and 0 key events over 28
          // days — so every "is this channel working?" question was answered
          // with engagement time as a proxy. It fires ONLY here, on a real
          // {result:'success'} from Mailchimp, never on the honeypot's decoy
          // confirmation above, or the number would count bots. gtag exists
          // only after the visitor accepts cookies (public/cookie-consent.js),
          // so this is a no-op otherwise — the same trade-off site search
          // already makes in src/scripts/search.js.
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'generate_lead', {
              method: 'newsletter_form',
              list: form.dataset.mcList || 'newsletter',
              language: form.dataset.mcLang || 'en'
            });
          }
          form.hidden = true;
          show(okEl);
          return;
        }
        // Mailchimp's msg is English-only, so map the one case worth naming
        // and fall back to a generic message in the page's language.
        var raw = (res && res.msg) || '';
        show(msgEl, /already subscribed/i.test(raw) ? form.dataset.mcDupe : form.dataset.mcErr);
        reset();
      };

      script.src = form.dataset.mcAction + '&' + params.toString();
      // Network failure, blocked request, or an ad blocker eating the endpoint.
      script.onerror = function () {
        if (done) return;
        cleanup();
        show(msgEl, form.dataset.mcErr);
        reset();
      };
      document.body.appendChild(script);

      // Belt and braces: never leave the button stuck on "Subscribing…".
      setTimeout(function () {
        if (done) return;
        cleanup();
        show(msgEl, form.dataset.mcErr);
        reset();
      }, 12000);
    });
  });
})();
