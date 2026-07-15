export type Meta = {
  name: PageName;
  title?: string;
  description?: string;
};

export type PageName = 'home' | 'log' | 'calendar' | 'about';

export const sitename = '今日のおなか';
export const siteDescription = 'みゆちゃんのミルクの記録';

export const siteurl = 'https://hondakeiu.github.io';

export const meta: { [key in PageName]: Meta } = {
  home: {
    name: 'home',
    title: sitename,
    description: siteDescription,
  },
  log: {
    name: 'log',
    description: siteDescription,
  },
  calendar: {
    name: 'calendar',
    title: 'calendar',
    description: '',
  },
  about: {
    name: 'about',
    title: 'about',
    description: '',
  },
};
