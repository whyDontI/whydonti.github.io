// To add a project, just add an object here. It'll show up on /projects automatically.
// `image` is optional — drop a screenshot in /public/projects/ and point to it (e.g. "/projects/inboxledger.png").
export const projects = [
  {
    title: "InboxLedger",
    url: "https://getinboxledger.com",
    image: "/projects/inboxledger.png",
    description:
      'Personal finance app that reads bank emails and PDF statements and turns them into a categorized spending ledger, no manual entry. The <strong class="kw">AI</strong> only does one small job: reading each transaction. <em class="emph">Everything after that runs on plain logic.</em> More in my résumé.',
    stack: "Solo build · in production",
    links: [
      { text: "demo", url: "https://youtu.be/OYQIgQIw1MI" },
      { text: "product page", url: "/products/inboxledger/" },
      { text: "résumé", url: "/resume" },
    ],
  },
  {
    title: "blobDrive",
    url: "/products/blobdrive/",
    image: "/projects/blobdrive.jpg",
    description:
      'A cozy multiplayer off-roading game that runs in the browser. Drive through hills, mud and water, then share a link so friends can join. <strong class="kw">Peer-to-peer</strong> over WebRTC, <em class="emph">no game server to run.</em>',
    stack: "Three.js · WebRTC · PeerJS",
    links: [{ text: "play", url: "/products/blobdrive/" }],
  },
];
