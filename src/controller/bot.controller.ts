import { Router } from 'express';

import BotService from '../service/bot.service';

export const botController = Router();

botController.post('/moveBot', BotService.handleUpdate);
