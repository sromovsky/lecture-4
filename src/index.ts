import {Request, Response} from 'express';
import {Service} from './service/service';
import {SERVER_PORT} from './const/api.const';
import {TimeService} from './service/time.service';
import {LessonService} from './service/lesson.service';
import {NewLesson} from "./model/NewLesson";

const express = require('express');
const service = new Service('1.0.0');
const timeService = new TimeService();
const lessonService = new LessonService();

const Lesson1 = new NewLesson(1, "PRP","Podpora rozhodovacich procesov", "09:15", "10:45");
const Lesson2 = new NewLesson(2,"MSII", "Management Science II", "11:00", "12:30");
const Lesson3 = new NewLesson(3, "UIES", "Umela Inteligencia a expertne systemy", "15:15", "16:45");

lessonService.add (Lesson1);
lessonService.add (Lesson2);
lessonService.add (Lesson3);

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

app.get('/timetable', (req: Request, res: Response) => {
    res.send(lessonService.getAll());
});

app.post('/timetable', (req: Request, res: Response) => {
    const newLesson = new NewLesson(req.body?.id, req.body?.shortcut, req.body?.name, req.body?.start, req.body?.end);

    if (lessonService.hasStartTime(newLesson)) {
        res.statusCode = 409;
        res.send({
            error: 'Another lesson running at this time!'
        });
    } else {
        res.send({id: lessonService.add(newLesson)});
    }
});



app.get('/open-slots', (req: Request, res: Response) => {
    res.send(lessonService.freeLessonTimes());
});

// Start server:
app.listen(SERVER_PORT, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${SERVER_PORT}`)
});