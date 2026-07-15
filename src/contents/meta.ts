export type Meta = {
  name: PageName;
  title?: string;
  description?: string;
};

export type PageName = 'home' | 'log' | 'memories' | 'month' | 'about';

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
  memories: {
    name: 'memories',
    title: 'memories',
    description: '振り返りカレンダー',
  },
  month: {
    name: 'month',
    title: 'memories',
    description: '振り返りカレンダー',
  },
  about: {
    name: 'about',
    title: 'about',
    description: '「今日のおなか」とは？',
  },
};
