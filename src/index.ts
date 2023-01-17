import express, { Request, Response } from "express";
import { Service } from "./service/service";
import { SERVER_PORT } from "./const/api.const";
import { TimeService } from "./service/time.service";
import { MeetingService } from "./service/meeting.service";
import { NewMeeting } from "./model/NewMeeting";
import { ChronoUnit, LocalDate, LocalTime } from "@js-joda/core";

const service = new Service("1.0.0");
const timeService = new TimeService();
const meetingService = new MeetingService();

const app = express();
app.use(express.json());

// Endpoint pre kontrolu stavu API
app.get("/", (req: Request, res: Response) => {
    res.send(service.healthcheck());
});

// Endpoint pre pridanie nového stretnutia
app.post("/meetings", (req: Request, res: Response) => {
    // YYYY-MM-DD
    const date = req.body?.date
        ? LocalDate.parse(req.body.date)
        : LocalDate.now();

    const newMeeting = new NewMeeting(req.body?.name, req.body?.start, date);

    const meetingExists = meetingService.hasStartTime(newMeeting.getStart(), newMeeting.getDate().dayOfMonth());

    if (meetingExists) {
        res.status(409).send({
            error: "Stretnutie pre túto hodinu a dátum už existuje!",
        });
    } else {
        const id = meetingService.add(newMeeting);
        res.status(201).send({ id });
    }
});

// Endpoint pre získanie všetkých stretnutí
app.get("/meetings", (req: Request, res: Response) => {
    res.send(meetingService.getAll());
});

// Upraví existujúce stretnutie
app.put("/meetings/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedMeeting = meetingService.update(id, req.body);
    if (updatedMeeting) {
        res.send(updatedMeeting);
    } else {
        res.status(404).send({ error: "Meeting not found" });
    }
});

// Vymaže existujúce stretnutie
app.delete("/meetings/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    const deleted = meetingService.delete(id);
    if (deleted) {
        res.send({ message: "Meeting deleted" });
    } else {
        res.status(404).send({ error: "Meeting not found" });
    }
});

// Získanie stretnutí pre konkrétneho používateľa
app.get("/meetings/user/:userId", (req: Request, res: Response) => {
    res.send(meetingService.getAllForUser(req.params.userId));
});

// Získanie stretnutí pre konkrétny časový interval
app.get("/meetings/:start/:end", (req: Request, res: Response) => {
    res.send(meetingService.getAllForInterval(req.params.start, req.params.end));
});

// Endpoint pre získanie stretnutí pre konkrétny deň
app.get("/meetings/:day", (req: Request, res: Response) => {
    const day = req.params.day;
    const meetings = meetingService.getAllForDay(day);
    if (meetings.length > 0) {
        res.send(meetings);
    } else {
        res.status(404).send({ error: `Neboli nájdené žiadne stretnutia pre deň ${day}` });
    }
});

// Endpoint pre získanie aktuálneho času
app.get("/current-time", (req: Request, res: Response) => {
    res.send(timeService.currentTime());
});

// Endpoint pre získanie dnešného dátumu
app.get("/today", (req: Request, res: Response) => {
    res.send(timeService.today());
});

// Endpoint pre získanie nasledujúcej celé hodiny
app.get("/next-time", (req: Request, res: Response) => {
    const nextTime = LocalTime.now().plusHours(1);
    res.send(nextTime.truncatedTo(ChronoUnit.HOURS));
});

// Start server:
app.listen(SERVER_PORT, () => {
    console.log(
        `⚡ [server]: Server is running at http://localhost:${SERVER_PORT}`
    );
});
