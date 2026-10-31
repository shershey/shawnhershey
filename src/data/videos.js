// ─────────────────────────────────────────────────────────────────────────
// VIDEOS  —  edit this file to add / remove / reorder videos.
//
//   • Videos are grouped into categories (the headings on the page).
//   • Within each category, the FIRST video is the one shown by default;
//     the rest appear under "Show more". To feature a different video,
//     move it to the top of its category.
//   • To ADD a video: copy a line, paste a title and the video link.
//     YouTube and Instagram links embed and play inline (YouTube start
//     times like ...?t=841 are kept). Other links (e.g. Facebook) show as
//     a clickable link instead. Instagram only embeds for public accounts.
//   • For a video that isn't posted yet, leave the link empty ('') and
//     optionally add a note. An empty category shows "coming soon".
//   • Instagram videos show a plain "Watch on Instagram" card by default.
//     To give one a real thumbnail, drop an image in public/images/thumbs/
//     and add  thumb: '/images/thumbs/your-file.jpg'  to that entry. The whole
//     photo is shown (never cropped); a blurred copy fills the wide tile behind it.
//   • To reorder the CATEGORIES, reorder the blocks below.
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
    { title: 'Teacher demo — Slow Bal Love 2026 · with Jen Barnett', url: 'https://www.instagram.com/reel/DfFUmrBN72x/' },
    { title: 'Pure Bal / Slow Bal all-skate — Shanghai Balboa Weekend 2026 · with Olivia Hales Adams', url: 'https://www.instagram.com/reel/DehRcc5gukK/' },
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
