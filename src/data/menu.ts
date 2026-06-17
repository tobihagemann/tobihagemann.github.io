export interface MenuItem {
  text: string;
  url: string;
}

export const menu: MenuItem[] = [
  { text: 'Blog', url: '/blog/' },
  { text: 'Projects', url: '/projects/' },
  { text: 'Impressum', url: '/impressum/' },
];
