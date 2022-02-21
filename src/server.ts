import express from 'express';
import bodyParser from 'body-parser';

import { botController } from './controller/bot.controller';
import { bot } from './bot';

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.json());

const cors = require('cors');
app.use(
  cors({
    origin: process.env.APP_URL,
  }),
);

app.use('', botController);

app.use('*', (req, res, next) => {
  res.status(404).json({ message: `Path ${req.originalUrl} not found!` });
  next();
});

(async () => {
  try {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server has been started on ${process.env.PORT}!`);
    });

    await bot.launch({
      webhook: {
        domain: process.env.DOMAIN,
        hookPath: '/moveBot',
      },
    });
  } catch (e) {
    console.log(e);
  }
})();
