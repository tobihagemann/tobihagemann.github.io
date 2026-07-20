export interface ProjectLink {
  url: string;
  text: string;
  icon: string;
}

export interface Project {
  title: string;
  img?: string;
  img2x?: string;
  text: string;
  links: ProjectLink[];
  tags: string[];
}

export const featuredProject: Project = {
  title: 'Cryptomator',
  img: '/assets/projects/cryptomator.png',
  img2x: '/assets/projects/cryptomator@2x.png',
  text: 'Cryptomator provides transparent, client-side encryption for your cloud. Protect your documents from unauthorized access. Cryptomator is free and open source software, so you can rest assured there are no backdoors.',
  links: [
    { url: 'https://cryptomator.org/', text: 'cryptomator.org', icon: 'fas fa-home' },
  ],
  tags: ['java', 'swift', 'objective-c', 'open source', 'crypto', 'fuse', 'dokany', 'webdav', 'cloud storage', 'desktop', 'ios', 'android', 'utility'],
};

export const projects: Project[] = [
  {
    title: 'Viral oder Egal',
    img: '/assets/projects/viraloderegal.png',
    img2x: '/assets/projects/viraloderegal@2x.png',
    text: 'Compete with your friends to guess the YouTube view count of short clips. This project is inspired by the segment <a href="https://www.youtube.com/watch?v=WZgXo-xfS5A&amp;list=PLHeo4sayeLKquxYPYoElpGcjPi-60sIkf" target="_blank" rel="noopener">Viral oder egal</a> on <a href="https://de.wikipedia.org/wiki/Neo_Magazin_Royale" target="_blank" rel="noopener">NEO MAGAZIN ROYALE</a>.',
    links: [
      { url: 'https://viraloderegal.de/', text: 'Play on viraloderegal.de', icon: 'fas fa-play-circle' },
      { url: 'https://github.com/tobihagemann/viraloderegal', text: 'Source Code on GitHub', icon: 'fab fa-github' },
    ],
    tags: ['typescript', 'open source', 'vue', 'hono', 'postgres', 'websocket', 'browser', 'game'],
  },
  {
    title: 'Energiekuchen',
    img: '/assets/projects/energiekuchen.png',
    img2x: '/assets/projects/energiekuchen@2x.png',
    text: 'Track your energy levels throughout the day with this simple visual app. Create positive and negative energy sources, visualize them in intuitive pie charts, and share your energy balance with others.',
    links: [
      { url: 'http://energiekuchen.de/', text: 'energiekuchen.de', icon: 'fas fa-home' },
      { url: 'https://github.com/tobihagemann/energiekuchen', text: 'Source Code on GitHub', icon: 'fab fa-github' },
    ],
    tags: ['typescript', 'open source', 'react', 'next.js', 'tailwind css', 'chart.js', 'browser', 'utility'],
  },
  {
    title: 'The Shit Is Hot',
    img: '/assets/projects/shitishot.png',
    img2x: '/assets/projects/shitishot@2x.png',
    text: 'You have to guess how many hits the shown terms generate in a search engine and place them in the correct order. This project is inspired by the segment <a href="https://www.youtube.com/watch?v=upm6SfYuGX4" target="_blank" rel="noopener">Der Scheiß ist heiß</a> on <a href="https://www.zdf.de/comedy/neo-magazin-mit-jan-boehmermann/" target="_blank" rel="noopener">NEO MAGAZIN ROYALE</a>.',
    links: [
      { url: 'https://shitishot.de/', text: 'Play on shitishot.de', icon: 'fas fa-play-circle' },
      { url: 'https://github.com/tobihagemann/shitishot', text: 'Source Code on GitHub', icon: 'fab fa-github' },
    ],
    tags: ['typescript', 'open source', 'angular', 'bootstrap', 'browser', 'game'],
  },
  {
    title: 'Spectrum Run',
    img: '/assets/projects/spectrum-run.png',
    img2x: '/assets/projects/spectrum-run@2x.png',
    text: 'Jump, dive, and slide through gates with the right color in a challenging hunt for the highscore in Spectrum Run. Master your reaction time while Doc White is gaining speed. Earn achievements and challenge your friends on Game Center.',
    links: [
      { url: 'https://apps.apple.com/app/id516387678', text: 'Download on the App Store', icon: 'fab fa-app-store-ios' },
      { url: 'https://tobiha.bandcamp.com/album/spectrum-run', text: 'Listen to Soundtrack on Bandcamp', icon: 'fab fa-bandcamp' },
    ],
    tags: ['objective-c', 'cocos2d', 'box2d', 'objectal', 'ios', 'game'],
  },
  {
    title: 'Evolution XPert',
    img: '/assets/projects/evolution-xpert.png',
    img2x: '/assets/projects/evolution-xpert@2x.png',
    text: 'Evolution XPert is an assistant app for Pokémon GO which helps players optimize their evolution XP gain. The app deduces the right amount of Pokémon of a particular kind to transfer in order to maximize the amount of possible evolutions.',
    links: [
      { url: 'https://apps.apple.com/app/id1135176839', text: 'Download on the App Store', icon: 'fab fa-app-store-ios' },
    ],
    tags: ['objective-c', 'pokemon go', 'ios', 'utility'],
  },
  {
    title: 'tooPassword',
    img: '/assets/projects/toopassword.png',
    img2x: '/assets/projects/toopassword@2x.png',
    text: "tooPassword for iOS offers read-only access to AgileBits' 1Password keychains. The project has been discontinued and is now fully open source.",
    links: [
      { url: 'https://github.com/setoLabs/tooPassword', text: 'Source Code on GitHub', icon: 'fab fa-github' },
    ],
    tags: ['objective-c', 'open source', 'crypto', '1password', 'ios', 'utility'],
  },
  {
    title: 'THLabel',
    img: '/assets/projects/thlabel.png',
    img2x: '/assets/projects/thlabel@2x.png',
    text: 'THLabel is a subclass of UILabel, which additionally allows shadow blur, inner shadow, stroke text and fill gradient.',
    links: [
      { url: 'https://github.com/tobihagemann/THLabel', text: 'Source Code on GitHub', icon: 'fab fa-github' },
    ],
    tags: ['objective-c', 'open source', 'uilabel', 'ios', 'library'],
  },
  {
    title: 'sissy',
    img: '/assets/projects/sissy.png',
    img2x: '/assets/projects/sissy@2x.png',
    text: 'Get notified when your grades for Hochschule Bonn-Rhein-Sieg (H-BRS) have updated. sissy is available for iOS and macOS, both run 100% locally.',
    links: [
      { url: 'https://github.com/tobihagemann/sissy', text: 'Source Code on GitHub', icon: 'fab fa-github' },
    ],
    tags: ['objective-c', 'open source', 'h-brs', 'macos', 'ios', 'utility'],
  },
  {
    title: 'bonntermin',
    text: "Automatically scrape Stadt Bonn's Dienstleistungszentrum appointment service for the earliest month that you can book. If the bookable month is the one you desire, you'll get notified by email.",
    links: [
      { url: 'https://github.com/tobihagemann/bonntermin', text: 'Source Code on GitHub', icon: 'fab fa-github' },
    ],
    tags: ['python', 'open source', 'scrapy', 'bonn', 'script', 'utility'],
  },
];
