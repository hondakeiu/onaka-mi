// 1. src/contents/raw に月ごとのエクスポートデータ ym.txt を配置
// 2. ターミナルで node src/scripts/convertPiyolog.mjs を実行
// 3. src/contents/logs.ts が生成される

import fs from 'node:fs';
import path from 'node:path';

const rawDir = path.resolve('src/contents/raw');
const outputDir = path.resolve('src/contents');
const outputPath = path.join(outputDir, 'logs.ts');

fs.mkdirSync(outputDir, { recursive: true });

const files = fs
  .readdirSync(rawDir)
  .filter((file) => file.endsWith('.txt'))
  .sort();

const allLogs = [];

for (const file of files) {
  const inputPath = path.join(rawDir, file);
  const text = fs.readFileSync(inputPath, 'utf8');

  const dayBlocks = text
    .split(/^----------$/m)
    .map((block) => block.trim())
    .filter(Boolean);

  const logs = dayBlocks
    .map((block) => {
      const dateMatch = block.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})\([^)]+\)/m);

      if (!dateMatch) return null;

      const [, year, month, day] = dateMatch;

      const date = [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');

      const milk = block.split(/\r?\n/).flatMap((line) => {
        const milkMatch = line.match(/^(\d{2}:\d{2})\s+ミルク\s+(\d+)ml/);

        if (milkMatch) {
          const [, time, amount] = milkMatch;

          return [
            {
              time,
              amount: Number(amount),
            },
          ];
        }

        const spitUpMatch = line.match(/^(\d{2}:\d{2})\s+吐き戻し.*?(-\d+)(?:ml)?(?:\s|$)/);

        if (spitUpMatch) {
          const [, time, amount] = spitUpMatch;

          return [
            {
              time,
              amount: Number(amount),
            },
          ];
        }

        return [];
      });

      return {
        date,
        milk,
      };
    })
    .filter(Boolean);

  allLogs.push(...logs);
}

const body = allLogs
  .map(
    (day) => `  {
    date: '${day.date}',
    ${
      day.milk.length
        ? `milk: [
${day.milk.map((milk) => `      { time: '${milk.time}', amount: ${milk.amount} },`).join('\n')}
    ],`
        : 'milk: [],'
    }
  },`,
  )
  .join('\n');

const output = `export const logs = [
${body}
] as const;
`;

fs.writeFileSync(outputPath, output);

console.log('created');
