import { Data } from "../service/data";
import {Request, Response} from 'express';
import { NOEMPLOYEE } from "../const/error.const";
import { EMPLOYEES } from "../const/routes.const";
import { Helper } from "../service/helper";

export abstract class Employees {

    static addEndpoints(app: any) {
        const data = new Data('1.0.0');
        app.get(`/${EMPLOYEES}`, (req: Request, res: Response) => {
            res.send(data.e);
        });
        
        app.get(`/${EMPLOYEES}/:id`, (req: Request, res: Response) => {
            const index: number = Helper.arrayIdSearch(data.e, Number(req.params.id));
            if (index != -1) {
                res.status(200).send(data.e[index]);
            } else {
                res.status(400).send(NOEMPLOYEE);
            }
        });
        return app;
    }
}