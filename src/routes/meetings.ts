import { Data } from "../service/data";
import { Request, Response } from 'express';
import { DURATIONPARSEFAILED, MISSINGREQPARAM, NOMEETING } from '../const/error.const';
import { MEETINGS } from '../const/routes.const';
import { Helper } from "../service/helper";
import { Meeting } from "../model/Meeting";
import { Duration, LocalDateTime } from "@js-joda/core";
import { DateTimeParser } from "../service/parsers/dateTimeParser";
import { Employee } from "../model/Employee";
import { MeetingRoom } from "../model/MeetingRoom";

export abstract class Meetings {

    static addEndpoints(app: any) {
        const data = new Data('1.0.0');

        app.get(`/${MEETINGS}`, (req: Request, res: Response) => {
            res.send(data.m);
        });

        app.post(`/${MEETINGS}`, (req: Request, res: Response) => {
            if (req.body.name == undefined || req.body.startDate == undefined || req.body.startTime == undefined || req.body.duration == undefined || req.body.host == undefined || req.body.invited == undefined || req.body.meetingRoom == undefined) {
                res.status(400).send(MISSINGREQPARAM);
            } else {
                const dateTime: LocalDateTime = DateTimeParser.parseDateTime(req.body.startDate, req.body.startTime);
                const nextId: number = Helper.getNextId(data.m)
                const duration: Duration | null = DateTimeParser.parseDuration(req.body.duration);
                const host: Employee = data.e[Helper.arrayIdSearch(data.e, req.body.host)];
                const invitees: Employee[] = Helper.generateInviteesArray(data.e, req.body.invited);
                const mr: MeetingRoom = data.mr[Helper.arrayIdSearch(data.mr, req.body.meetingRoom)];
                if (duration == null) {
                    res.status(400).send(DURATIONPARSEFAILED);
                } else {
                    const newMeeting: Meeting = new Meeting(nextId, req.body.name, dateTime, duration, host, invitees, mr);
                    data.m.push(newMeeting);
                    res.status(200).send(newMeeting.getPrettyPrintedMeetingInfo());
                }
            }

        });

        app.get(`/${MEETINGS}/:id`, (req: Request, res: Response) => {
            const index: number = Helper.arrayIdSearch(data.m, Number(req.params.id));
            if (index != -1) {
                res.status(200).send(data.m[index].getPrettyPrintedMeetingInfo());
            } else {
                res.status(404).send(NOMEETING);
            }
        });
        return app;
    }
}