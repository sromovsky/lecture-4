import { Data } from "../service/data";
import {Request, Response} from 'express';
import { MISSINGREQPARAM, NOEMPLOYEE } from "../const/error.const";
import { EMPLOYEES } from "../const/routes.const";
import { Helper } from "../service/helper";
import { Employee } from "../model/Employee";

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

        app.post(`/${EMPLOYEES}`, (req: Request, res: Response) => {
            if (req.body.firstName !== undefined && req.body.lastName !== undefined && req.body.position !== undefined) {
                const id = data.e[data.e.length - 1].getId() + 1;
                const newEmployee = new Employee(id ,req.body.firstName, req.body.lastName, req.body.position);
                data.e.push(newEmployee);
                res.status(200).send(newEmployee);
            } else {
                res.status(400).send(MISSINGREQPARAM);
            }
        });
        return app;
    }
}