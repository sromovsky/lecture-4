import { Data } from "../service/data";
import {Request, Response} from 'express';
import { NOBUILDING } from '../const/error.const';
import { BUILDINGS } from '../const/routes.const';
import { Helper } from "../service/helper";

export abstract class Buildings {

    static addEndpoints(app: any) {
        const data = new Data('1.0.0');

        app.get(`/${BUILDINGS}`, (req: Request, res: Response) => {
            res.send(data.b);
        });
        
        app.get(`/${BUILDINGS}/:id`, (req: Request, res: Response) => {
            const index: number = Helper.arrayIdSearch(data.b, Number(req.params.id));
            if (index != -1) {
                res.status(200).send(data.b[index].getPritableBuilding());
            } else {
                res.status(400).send(NOBUILDING);
            }
        });
        return app;
    }
}