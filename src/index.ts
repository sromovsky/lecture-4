import {Request, Response} from 'express';
import {Service} from './service/service';
import {SERVER_PORT} from './const/api.const';
import { Data } from './service/data';
import { Employees } from './routes/employees';
import { Meetings } from './routes/meetings';


const express = require('express');
const service = new Service('1.0.0');
const data = new Data('1.0.0');

const app = express();
app.use(express.json());
Employees.addEndpoints(app);
Meetings.addEndpoints(app);

app.get('/', (req: Request, res: Response) => {
    res.send(service.healthcheck());
});

// Start server:
app.listen(SERVER_PORT, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${SERVER_PORT}`)
});