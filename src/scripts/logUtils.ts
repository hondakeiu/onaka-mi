export type MilkLog = {
  time: string;
  amount: number;
};

export type DailyLog = {
  date: string;
  milk: readonly MilkLog[];
};

const birthday = new Date('2026-05-24T00:00:00');

const weekMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

export const getDate = (date: string) => {
  const current = new Date(`${date}T00:00:00`);

  const year = current.getFullYear();
  const month = String(current.getMonth() + 1).padStart(2, '0');
  const day = String(current.getDate()).padStart(2, '0');
  const week = weekMap[current.getDay()];

  return `${year}.${month}.${day} ( ${week} )`;
};

export const getAge = (date: string) => {
  const current = new Date(`${date}T00:00:00`);

  let months = current.getFullYear() * 12 + current.getMonth() - (birthday.getFullYear() * 12 + birthday.getMonth());
  let days = current.getDate() - birthday.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonthsLastDate = new Date(current.getFullYear(), current.getMonth(), 0).getDate();
    days += prevMonthsLastDate;
  }

  return `${months}m${days}d`;
};

export const getAgeInDays = (date: string) => {
  const current = new Date(`${date}T00:00:00`);

  return Math.floor((current.getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24));
};

export const getTotalAmount = (milk: readonly MilkLog[]) => {
  return milk.filter(({ amount }) => amount >= 0).reduce((sum, { amount }) => sum + amount, 0);
};

export const getTotalTimes = (milk: readonly MilkLog[]) => milk.filter(({ amount }) => amount >= 0).length;
