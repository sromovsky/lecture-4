import { Data } from "../service/data";
import { Service } from "../service/service";
import {Request, Response} from 'express';
import { NOBUILDING } from '../const/error.const';
import { BUILDINGS } from '../const/routes.const';

export abstract class Helper {

   static arrayIdSearch(data: any, id: Number): number {
        const index = data.findIndex((x: { getId: () => number; }) => x.getId() === Number(id));
        return index;
   }
}