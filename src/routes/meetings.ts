import { Data } from "../service/data";
import {Request, Response} from 'express';
import { NOMEETING } from '../const/error.const';
import { MEETINGS } from '../const/routes.const';
import { Helper } from "../service/helper";

export abstract class Meetings {

    static addEndpoints(app: any) {
        const data = new Data('1.0.0');

        app.get(`/${MEETINGS}`, (req: Request, res: Response) => {
            res.send(data.m);
        });
        
        app.get(`/${MEETINGS}/:id`, (req: Request, res: Response) => {
            const index: number = Helper.arrayIdSearch(data.m, Number(req.params.id));
            if (index != -1) {
                res.status(200).send(data.m[index].getPrettyPrintedMeetingInfo());
            } else {
                res.status(400).send(NOMEETING);
            }
        });
        return app;
    }
}