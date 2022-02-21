import { Telegraf } from 'telegraf';

import * as dotenv from 'dotenv';
dotenv.config();

export const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  await ctx.reply('Set members count with /set <number>');
});

let text =
    'Как предложить слова для стикера\n' +
    '\n' +
    'Создать голосование через бота @like так:\n' +
    '1. Зайти в чат с ботом @like\n' +
    '2. Написать предлагаемое слово/фразу, добавить хэштег #голосуй (для облегчения поиска администрацией и желающими голосовать)\n' +
    '3. Добавить два смайла: 👍🏼 и 👎🏼\n' +
    '4. Опубликовать созданный опрос в чате: @wordsru\n' +
    '5. Ждать результатов голосования (можете просить друзей)\n' +
    '\n' +
    'Пример правильного предложения: t.me/wordsru/9760\n' +
    '\n' +
    'Сразу отказываем в добавлении:\n' +
    '- Предложение содержит имя (Петя - лох) Зачем тысячам людей стикер с оскорблением вашего друга?\n' +
    '- Уже имеется аналогичный стикер, несущий тот же смысл';

bot.command('add', async (ctx: any) => {
  ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.launch();
