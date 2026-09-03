// Share row (OPS-359) — the targets a reader uses to pass a page on, and the
// sentence that travels with the link.
//
// Two decisions worth keeping:
//
// 1. **The text carries the attribution, because the link often doesn't.**
//    Lena asked that whoever receives a share can tell where it came from.
//    WhatsApp, Telegram and email show the message text, and a bare URL in a
//    group chat says nothing until someone taps it. So every target that
//    accepts free text gets `shareText()` — the page's own title, an em dash,
//    and the byline. Facebook is the exception: its
//    sharer has ignored `quote`/`description` since 2017 and builds the card
//    from the destination's Open Graph tags, which BaseLayout already sets
//    correctly. Passing text there would be dead weight, so we don't.
//
// 2. **Labels, not brand glyphs.** The design system is hairlines, square
//    corners and wide-tracked caps (see `.post-tags` in blog.css); a row of
//    coloured brand roundels would be the only such thing on the site. The
//    buttons are set in the same vocabulary as the topic links they sit next
//    to. If Lena wants the marks later they drop into `.sh-btn` without any
//    of the logic here changing.
//
// Viber was considered and dropped: its only share entry point is the
// `viber://forward` scheme, which does nothing on a desktop browser, and a
// button that silently fails on half the traffic is worse than its absence.
// Telegram covers the same Ukrainian audience and works everywhere.

export const SHARE_UI = {
  en: {
    post: 'Share this article',
    recipe: 'Share this recipe',
    page: 'Share this page',
    native: 'Share…',
    copy: 'Copy link',
    copied: 'Link copied',
    email: 'Email',
  },
  ua: {
    post: 'Поділитися статтею',
    recipe: 'Поділитися рецептом',
    page: 'Поділитися сторінкою',
    native: 'Поділитися…',
    copy: 'Копіювати посилання',
    copied: 'Посилання скопійовано',
    email: 'Пошта',
  },
};

// Trails the title in every shared message: who wrote it, and where it lives.
// A name and a domain rather than a strapline, and the same string in both
// languages, because a descriptive one collides with the page it is describing
// — "Evidence-based notes on health after 40 — from Lena Filatova,
// evidence-based women's health after 40" was the first attempt at it.
const BYLINE = 'Lena Filatova · lenafilatova.co.uk';

// The message body. Title first so it survives a preview that truncates.
export function shareText(lang, title) {
  return `${title} — ${BYLINE}`;
}

// The share targets for one page, in display order.
//
// `image` is only used by Pinterest, which pins a picture rather than a page
// and shows a blank pin without one — so the button is only built when the
// caller actually has an absolute image URL (recipes, and posts whose hero
// has been supplied). Everywhere else Pinterest simply isn't offered.
export function shareTargets({ lang = 'en', url, title, image }) {
  const t = SHARE_UI[lang] || SHARE_UI.en;
  const text = shareText(lang, title);
  const u = encodeURIComponent(url);
  const x = encodeURIComponent(text);

  const targets = [
    // Ukrainian readers reach for Telegram first; UK readers reach for
    // WhatsApp. Same buttons either way — only the order changes.
    ...(lang === 'ua'
      ? [
          { key: 'telegram', label: 'Telegram', href: `https://t.me/share/url?url=${u}&text=${x}` },
          { key: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}` },
        ]
      : [
          { key: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}` },
          { key: 'telegram', label: 'Telegram', href: `https://t.me/share/url?url=${u}&text=${x}` },
        ]),
    { key: 'facebook', label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
  ];

  if (image) {
    targets.push({
      key: 'pinterest',
      label: 'Pinterest',
      href: `https://www.pinterest.com/pin/create/button/?url=${u}&media=${encodeURIComponent(image)}&description=${x}`,
    });
  }

  targets.push({
    key: 'email',
    label: t.email,
    // mailto is not a web share sheet: it opens the reader's own mail client,
    // so it gets no target="_blank" (see ShareRow).
    href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${text}\n\n${url}`)}`,
  });

  return targets;
}
