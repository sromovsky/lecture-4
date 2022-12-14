import {Request, Response} from 'express';
import {Service} from './service/service';
import {SERVER_PORT} from './const/api.const';
import {TimeService} from './service/time.service';
import {MeetingService} from './service/meeting.service';
import {NewMeeting} from './model/NewMeeting';

const express = require('express');
const service = new Service('1.0.0');
const timeService = new TimeService();
const meetingService = new MeetingService();

const app = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send(service.healthcheck());
});

app.get('/today', (req: Request, res: Response) => {
    res.send(timeService.today());
});

app.get('/working-time', (req: Request, res: Response) => {
    res.send(timeService.workingTime());
});

app.get('/meetings', (req: Request, res: Response) => {
    res.send(meetingService.getAll());
});

app.post('/meetings', (req: Request, res: Response) => {
    const newMeeting = new NewMeeting(req.body?.name, req.body?.start);

    if(!meetingService.checkWorkingTime(newMeeting.getStart())){
        res.send({
            error: 'Time is out of working time!'
        });
    }
    if (meetingService.hasStartTime(newMeeting.getStart())) {
        res.statusCode = 409;
        res.send({
            error: 'Meeting already exist!'
        });
    } else {
        res.send({id: meetingService.add(newMeeting)});
    }
});

app.get('/free-meeting-times', (req: Request, res: Response) => {
    res.send(meetingService.freeMeetingTimes());
});

// Start server:
app.listen(SERVER_PORT, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${SERVER_PORT}`)
});