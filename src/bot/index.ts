import { Telegraf } from 'telegraf';

import * as dotenv from 'dotenv';
dotenv.config();

export const bot = new Telegraf(process.env.BOT_TOKEN);

let text =
  '<b>Как предложить слова для стикера</b>\n\n' +
  'Создать голосование через бота @like так:\n' +
  '1. Зайти в чат с ботом @like\n' +
  '2. Написать предлагаемое слово/фразу, добавить хэштег #голосуй (для облегчения поиска администрацией и желающими голосовать)\n' +
  '3. Добавить два смайла: 👍🏼 и 👎🏼\n' +
  '4. Опубликовать созданный опрос в чате: @wordsru\n' +
  '5. Ждать результатов голосования (можете просить друзей)\n' +
  '\n' +
  '<b>Пример правильного предложения: t.me/wordsru/9760</b>\n' +
  '\n' +
  '<b>Сразу отказываем в добавлении:</b>\n' +
  '<b>- Предложение содержит имя</b> (Петя - лох)   <em>Зачем тысячам людей стикер с оскорблением вашего друга?</em>\n' +
  '- Уже имеется аналогичный стикер, несущий тот же смысл';

bot.command('add', async (ctx: any) => {
  if (JSON.parse('[' + process.env.ADMIN_IDS + ']').includes(ctx.from.id)) {
    ctx.telegram.deleteMessage(ctx.message.id);
    ctx.telegram.sendMessage(ctx.chat.id, text, { parse_mode: 'html' });
  } else {
    console.log('403');
  }
});

bot.launch();
