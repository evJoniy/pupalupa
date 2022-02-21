import { Response, Request } from 'express';
import { bot } from '../bot';

export default class BotService {
  public static handleUpdate(req: Request, res: Response): Promise<any> {
    return bot.handleUpdate(req.body, res).catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
  }
}
