export const pcMql = window.matchMedia('(min-width: 769px)');
export const hoverableMql = window.matchMedia('(hover: hover) and (pointer: fine)');

export const isPc = () => pcMql.matches;
export const isSp = () => !isPc();
export const isHoverable = () => hoverableMql.matches;
