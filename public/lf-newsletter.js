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
