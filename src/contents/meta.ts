export type Meta = {
  name: PageName;
  title?: string;
  description?: string;
};

export type PageName = "home";

export const sitename = "今日のおなか";

export const siteurl = "https://hondakeiu.github.io";

export const meta: { [key in PageName]: Meta } = {
  home: {
    name: "home",
    title: sitename,
    description: "みゆちゃんのミルクの記録",
  },
};
