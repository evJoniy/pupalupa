import { Telegraf } from 'telegraf';

import * as dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

export const bot = new Telegraf(process.env.BOT_TOKEN);

let count = 6;

console.log('in index.ts');

bot.start(async (ctx) => {
  await ctx.reply('Set members count with /set <number>');
});

bot.command('pay', async (ctx: any) => {
  const curJson = await axios.get(process.env.CUR);
  const data = curJson.data.quotes.USDUAH;
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "It's pay time! According to current stats you owe the Commander " +
      ((7.99 / count) * data).toFixed(2) +
      ' local tugriks',
  );
});
