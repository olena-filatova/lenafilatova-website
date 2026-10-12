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
//
//   - The tag only ever loads on the live domain (OPS-520). Dev-server
//     previews on localhost were firing the real tag and polluting the live
//     property: 13 of 119 pageviews in the 28 days to 24 Sep 2026 came from
//     hostname `localhost`. Measuring a host allowlist rather than blocking a
//     denylist means any future preview host (a project page, a branch
//     deploy, an IP) is excluded by default instead of silently counted.
//     The banner itself still renders off-domain, so its UI stays previewable.
(function () {
  var GA_ID = 'G-0F8T9VQFQ0';
  var DISABLE_FLAG = 'ga-disable-' + GA_ID;

  // Cloudflare Web Analytics (OPS-522). GA4 only ever reports the visitors who
  // interact with the banner: in the week of 18-24 Sep 2026 it logged 1 visit
  // from Google against 31 Google clicks in Search Console. Cloudflare's beacon
  // sets no cookies, stores no personal data and writes no identifier to the
  // device, so PECR consent does not apply to it and it can count everyone.
  //
  // Deliberately NOT gated on the banner: that is the entire point. Declining
  // still stops GA4 outright, which is the thing a visitor is actually being
  // asked about. The cookie and privacy policies say so in as many words.
  //
  // Empty token = nothing loads. Cloudflare's automatic setup injects its own
  // beacon at the edge and needs no token here; fill this in ONLY if the
  // snippet is being added by hand, or the page would carry two beacons and
  // double-count.
  var CF_BEACON_TOKEN = '';

  // The only hosts whose traffic is real. Everything else — localhost,
  // 127.0.0.1, *.github.io, any branch preview — is development.
  var LIVE_HOSTS = ['lenafilatova.co.uk', 'www.lenafilatova.co.uk'];

  function isLiveSite() {
    return LIVE_HOSTS.indexOf(location.hostname) !== -1;
  }

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
    // Off the live domain, never fetch gtag.js. Other scripts call
    // window.gtag() for their own events (search, generate_lead); with the
    // library absent those calls only push onto dataLayer and go nowhere.
    if (!isLiveSite()) return;
    if (window.__lfGA) return;
    window.__lfGA = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  function loadCloudflare() {
    if (!isLiveSite()) return;
    if (!CF_BEACON_TOKEN) return;
    if (window.__lfCF) return;
    window.__lfCF = true;
    var s = document.createElement('script');
    s.defer = true;
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_BEACON_TOKEN }));
    document.head.appendChild(s);
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

    // Before the GA branches below, because it is independent of all of them.
    loadCloudflare();

    if (choice === 'declined') {
      // Never start the tag for someone who has said no.
      window[DISABLE_FLAG] = true;
      return;
    }

    if (isLiveSite()) setDefaults(choice);
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
