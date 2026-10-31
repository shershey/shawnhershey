// ─────────────────────────────────────────────────────────────────────────
// VIDEOS  —  edit this file to add / remove / reorder videos.
//
//   • Videos are grouped into categories (the headings on the page). Every
//     video in a category shows as a uniform tile in a grid — the order here
//     is the order on the page (first entry = top-left). No "show more".
//   • To ADD a video: copy a line, set its title and url. Clicking a YouTube
//     tile opens an inline player (start times like ...?t=841 are kept);
//     an Instagram tile opens the reel on Instagram; any other link opens in
//     a new tab. Instagram works only for public accounts.
//   • For a video that isn't posted yet, leave the link empty ('') and
//     optionally add a note. An empty category shows "coming soon".
//   • Instagram videos show a plain "Watch on Instagram" card by default.
//     To give one a real thumbnail, drop an image in public/images/thumbs/
//     and add  thumb: '/images/thumbs/your-file.jpg'  to that entry. The whole
//     photo is shown (never cropped); a blurred copy fills the wide tile behind it.
//     Prefer JPEG (far smaller than PNG screenshots) to keep the page light.
//   • To reorder the CATEGORIES, reorder the blocks below.
//
//   • TITLE FORMAT — keep every title consistent:
//       Competition:   {Placement} — {Event} {Year}, {Division} · with {Follow}
//       Demo / show:    {Teacher demo | Instructor demo | Social dance demo |
//                        Demo | Performance} — {Event} {Year}[, {Division}] · with {Follow}
//     - Include {Placement} ('1st place', '2nd place', …) ONLY when a placement
//       was earned; otherwise start with the event (or the demo/show type).
//     - The category is the section heading — never repeat it in the title.
//     - Name the dance partner after ' · with '. Drop that clause only when it's
//       solo or a band act (name the band in the title instead).
//     - Separators: ' · ' before the follow; an em dash ' — ' after the
//       placement or the demo/show type. Examples:
//         1st place — Cal Bal 2026, Open Mix & Match · with Hannah Manning
//         Teacher demo — Policoro in Swing 2026 · with Natalia Eristavi
//         Snowball 2025, Strictly finals · with Olivia Hales Adams
// ─────────────────────────────────────────────────────────────────────────

export default {

  'Balboa': [
    { title: 'Teacher demo — Policoro in Swing 2026 · with Natalia Eristavi',                       url: 'https://www.youtube.com/watch?v=K1UwFi6Lnq4' },
    { title: '1st place — Cal Bal 2026, Open Mix & Match · with Hannah Manning',                    url: 'https://www.youtube.com/watch?v=ouRiBgvzBeI' },
    { title: 'Bal Week 2026, Rendezvous finals · with Yurina Shin',                            url: 'https://www.instagram.com/reel/DZybxzMxX-j/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', thumb: '/images/thumbs/bal-week-rendezvous-2026.jpg' },
    { title: 'Shanghai Balboa Weekend 2026, Strictly · with Olivia Hales Adams',                       url: 'https://www.instagram.com/reel/DeMRS8lB6Nf/', thumb: '/images/thumbs/shanghai-strictly-2026.jpg' },
    { title: 'Shanghai Balboa Weekend 2026, Invitational Mix & Match · with Delphine Laurens',       url: 'https://www.instagram.com/reel/DeL0osTg-Fk/', thumb: '/images/thumbs/shanghai-invitational-mnm-2026.jpg' },
    { title: 'Teacher demo — Hong Kong Balboa, Sept 2026 · with Denise Wei Wei Lwin',                url: 'https://www.instagram.com/reel/DdoCpgRRov7/', thumb: '/images/thumbs/hong-kong-balboa-2026.jpg' },
    { title: '3rd place — Cal Bal 2023 · with Natalia Eristavi',                                     url: 'https://www.youtube.com/watch?v=4etcIvxKANk' },
    { title: '1st place — Bal Love 2019, Strictly · with Theresa Manney',             url: 'https://youtu.be/IhKzMboc30k?t=224' },
    { title: 'Social dance demo — Camp California Weekend, Beijing 2026 · with Miyabi Hong',  url: 'https://www.instagram.com/reel/DdY0l8NxZnJ/', thumb: '/images/thumbs/camp-california-beijing-2026.jpg' },
    { title: 'Snowball 2025, Strictly finals · with Olivia Hales Adams',                             url: 'https://www.instagram.com/reel/DS5TteeDI_6/', thumb: '/images/thumbs/strictly-snowball-2025.jpg' },
    { title: '1st place — All Balboa Weekend 2017, Amateur · with Yurina Shin', url: 'https://youtu.be/BXnWJzEFc8o?t=841' },
    { title: '1st place — Snowball 2019, Mix & Match · with Amy Lu',               url: 'https://youtu.be/dtdhfAXKA9M?t=294' },
    // { title: 'Bal Week 2026 Mix & Match finals',                           url: '' },
  ],

  'Slow Balboa': [
    { title: 'Teacher demo — Slow Bal Love 2026 · with Jen Barnett', url: 'https://www.instagram.com/reel/DfFUmrBN72x/', thumb: '/images/thumbs/slow-bal-love-2026.jpg' },
    { title: 'Pure Bal / Slow Bal all-skate — Shanghai Balboa Weekend 2026 · with Olivia Hales Adams', url: 'https://www.instagram.com/reel/DehRcc5gukK/', thumb: '/images/thumbs/shanghai-slow-pure-all-skate-2026.jpg' },
    { title: '1st place — Stardust 2025, Slow Bal · with Jen Barnett',     url: 'https://youtu.be/Mvht_KYqRD4?si=5CvJVApq5tfGwlO9&t=409' },
    { title: '1st place — Bal Week 2026, Slow Bal (song 1) · with Theresa Manney',       url: 'https://www.youtube.com/watch?v=tuUFxIFIg7Y' },
    { title: '1st place — Bal Week 2026, Slow Bal (song 2) · with Theresa Manney',       url: 'https://www.youtube.com/watch?v=H0UV52IkrZk' },
    { title: '1st place — Bal Week 2026, Slow Bal (song 3) · with Theresa Manney',       url: 'https://www.youtube.com/watch?v=IUP7OFAv4xk' },
    { title: '1st place — Bal Week 2025, Slow Bal · with Jen Barnett',       url: 'https://www.instagram.com/reel/DKX9TfERLvm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', thumb: '/images/thumbs/slow-bal-bal-week-2025.jpg' },
    { title: 'Teacher demo — Hong Kong 2026, Slow Bal · with Denise Wei Wei Lwin', url: 'https://www.instagram.com/reel/DdsgpGVxSNg/', thumb: '/images/thumbs/hong-kong-slow-bal-2026.jpg' },
    { title: '2nd place — Bal Week 2024, Slow Bal · with Jessica White',             url: 'https://www.youtube.com/watch?v=Qr31lBboN6w' },
    { title: '3rd place — Great Lakes 2019, Slow Bal · with Jenn Lee',          url: 'https://youtu.be/3JzPJ_OsZOQ?t=215' },
  ],

  'Blues': [
    // Add blues videos here, e.g.:
    { title: '1st place — Snowball 2026, Invitational Blues · with Vicci Moore', url: 'https://www.instagram.com/reel/DTyU8GdCLgu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', thumb: '/images/thumbs/snowball-invitational-blues-2026.jpg' },
    { title: "Jeep's Blues with the B-Sides — bluesSHOUT! 2019 · with Flouer Evelyn", url: 'https://www.youtube.com/watch?v=bzomjg4O8HY' },
    { title: 'Instructor demo — Korea Blues Camp 2024 · with Flouer Evelyn', url: 'https://www.youtube.com/watch?v=WYj4hOwuY6g' },
    { title: 'bluesSHOUT! 2016, Strictly · with Julie Brown', url: 'https://www.youtube.com/watch?v=81OkjpB2cHo' },
    { title: 'Demo — Rose City Blues 2015 · with Julie Brown', url: 'https://www.youtube.com/watch?v=rGN16XsA2-E' },
    { title: 'bluesSHOUT! 2017, All Stars Strictly finals · with Julie Brown', url: 'https://youtu.be/xiNQjgeePU0?t=430' },
    { title: 'bluesSHOUT! 2017, All Stars Mix & Match finals · with Rachel Stirling', url: 'https://youtu.be/JpTHQ_-GAkQ?t=166' },
    { title: '2nd place — bluesSHOUT! 2015, All-Star Mix & Match finals · with Campbell Miller', url: 'https://youtu.be/ZBd9ZY6Ksr4?t=597' },
    { title: 'bluesSHOUT! 2014, All Stars J&J finals spotlight · with Laney Barhaugh', url: 'https://www.youtube.com/watch?v=qmy7XzsqQz0' },
  ],

  'Slow Dance Competitions': [
    { title: '1st place — Snowball 2019, Slow Jam · with Jenn Lee', url: 'https://youtu.be/QxlfnZ8nayo?t=21' },
    { title: '1st place — Slow Dance Soiree 2024 · with Idalia Somar', url: 'https://www.instagram.com/reel/C9clmiMOIi_/', thumb: '/images/thumbs/slow-dance-soiree-2024.jpg' },
  ],
    'Pure Balboa': [
    { title: 'Cal Bal 2026, Pure Bal finals · with Olivia Hales Adams',            url: 'https://www.instagram.com/reel/DUlajakgWSl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', thumb: '/images/thumbs/pure-bal-cal-bal-2026.jpg' },
    { title: '4th place — Shanghai Balboa Weekend 2026, Pure Bal finals · with Olivia Hales Adams', url: 'https://www.instagram.com/reel/DeMYYBdxVIh/', thumb: '/images/thumbs/shanghai-pure-bal-2026.jpg' },
    { title: 'Great Lakes 2025, Pure Bal finals · with Olivia Hales Adams',        url: 'https://www.youtube.com/watch?v=O4qUkmsAKmg', thumb: '/images/thumbs/pure-bal-great-lakes-2025.jpg' },
  ],

};

// FOLLOW LINKS — maps a follow's exact name (as written after "· with" in a
// title) to their page. Any matching name in a title is auto-linked on the
// page. One entry per person; reused across all their videos. Add new follows
// here when you add a video with a new partner.
export const follows = {
  'Olivia Hales Adams': 'https://www.instagram.com/olivia_rose_goes/',
  'Yurina Shin':        'https://www.instagram.com/yurina.shin/',
  'Natalia Eristavi':   'https://www.instagram.com/nataeristavi/',
  'Theresa Manney':     'https://www.instagram.com/theresa.manney/',
  'Hannah Manning':     'https://www.instagram.com/hannahm.swing/',
  'Delphine Laurens':   'https://www.instagram.com/swingdelii/',
  'Denise Wei Wei Lwin':'https://www.instagram.com/swinglikelwin/',
  'Miyabi Hong':        'https://www.instagram.com/swing_miyabi/',
  'Amy Lu':             'https://www.instagram.com/amyalexswing/',
  'Jen Barnett':        'https://rockininrhythm.com/',
  'Jessica White':      'https://www.instagram.com/jessicamiltenberger/',
  'Jenn Lee':           'https://therealjenniferlee.com/',
  'Vicci Moore':        'https://www.instagram.com/viccimoore/',
  'Flouer Evelyn':      'https://flouerdances.com/',
  'Julie Brown':        'https://www.julie-brown-blues-dance.com/',
  'Rachel Stirling':    'https://www.instagram.com/rcs121/',
  'Campbell Miller':    'https://www.instagram.com/campbell_miller_/',
  'Laney Barhaugh':     'https://www.instagram.com/laneybarhaugh/',
  'Idalia Somar':       'https://www.instagram.com/idaliaist/',
};
