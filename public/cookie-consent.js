// Cookie banner + GA4 under Google Consent Mode v2 (OPS-431).
//
// Same GA_ID and localStorage keys as the old Divhunt site
// (lf_cookie: "accepted" | "declined"), so returning visitors' choices carry
// over.
//
// How this differs from the consent-gated version it replaces:
//
//   - gtag now loads on every page, with every consent type DENIED by default.
//     Under denied consent GA4 sends cookieless pings: no identifiers are
//     written to or read from the device. This restores aggregate traffic and
//     page-level reporting for visitors who simply ignore the banner, and it
//     restores referrer attribution, because the first page view now fires
//     while document.referrer still holds the real source.
//
//   - Accept upgrades analytics_storage to granted, exactly as before.
//
//   - Decline is a full stop, not merely a refusal to upgrade. It sets
//     window['ga-disable-<GA_ID>'] = true, Google's documented opt-out flag,
//     so someone who actively says no is not measured at all — not even
//     cookielessly. That is stricter than Consent Mode alone and is the whole
//     reason this shape was chosen: ignoring the banner and refusing it are
//     treated as different answers.
//
//   - Advertising consent types stay denied permanently. The site runs no ads
//     and no remarketing, so there is nothing to upgrade them for.
(function () {
  var GA_ID = 'G-0F8T9VQFQ0';
  var DISABLE_FLAG = 'ga-disable-' + GA_ID;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };

  function readChoice() {
    try { return localStorage.getItem('lf_cookie'); } catch (e) { return null; }
  }

  // Must run before gtag.js is fetched, or the defaults do not apply.
  function setDefaults(choice) {
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: choice === 'accepted' ? 'granted' : 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted'
    });
  }

  function loadGA() {
    if (window.__lfGA) return;
    window.__lfGA = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  function grant() {
    window[DISABLE_FLAG] = false;
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }

  function refuse() {
    // Stop collection outright, not just cookie storage.
    window[DISABLE_FLAG] = true;
    gtag('consent', 'update', { analytics_storage: 'denied' });
  }

  function init() {
    var choice = readChoice();

    if (choice === 'declined') {
      // Never start the tag for someone who has said no.
      window[DISABLE_FLAG] = true;
      return;
    }

    setDefaults(choice);
    loadGA();

    if (choice === 'accepted') return;

    var bar = document.getElementById('cookieBar');
    if (!bar) return;
    bar.hidden = false;

    document.getElementById('cookieAccept').addEventListener('click', function () {
      try { localStorage.setItem('lf_cookie', 'accepted'); } catch (e) {}
      bar.hidden = true;
      grant();
    });

    document.getElementById('cookieDecline').addEventListener('click', function () {
      try { localStorage.setItem('lf_cookie', 'declined'); } catch (e) {}
      bar.hidden = true;
      refuse();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
