import {Request, Response} from 'express';
import {Service} from './service/service';
import {SERVER_PORT} from './const/api.const';
import {TimeService} from './service/time.service';

const express = require('express');
const service = new Service('1.0.0');
const timeService = new TimeService();

const app = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send(service.healthcheck());
});

app.get('/today', (req: Request, res: Response) => {
    res.send(timeService.today());
});


// Start server:
app.listen(SERVER_PORT, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${SERVER_PORT}`)
});