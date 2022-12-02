import { Data } from "../service/data";
import { Request, Response } from 'express';
import { DURATIONPARSEFAILED, MISSINGREQPARAM, NOMEETING, ROOMTAKEN } from '../const/error.const';
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
                const duration: Duration = DateTimeParser.parseDuration(req.body.duration);
                const host: Employee = data.e[Helper.arrayIdSearch(data.e, req.body.host)];
                const invitees: Employee[] = Helper.generateInviteesArray(data.e, req.body.invited);
                const mr: MeetingRoom = data.mr[Helper.arrayIdSearch(data.mr, req.body.meetingRoom)];
                if (duration == Duration.ofMillis(0)) {
                    res.status(400).send(DURATIONPARSEFAILED);
                } else {
                    const newMeeting: Meeting = new Meeting(nextId, req.body.name, dateTime, duration, host, invitees, mr);
                    if (Helper.validateMeeting(data.m, newMeeting)) {
                        data.m.push(newMeeting);
                        res.status(200).send(newMeeting.getPrettyPrintedMeetingInfo());
                    } else {
                        res.status(409).send(ROOMTAKEN);
                    }
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

        app.put(`/${MEETINGS}/:id`, (req: Request, res: Response) => {
            const index: number = Helper.arrayIdSearch(data.m, Number(req.params.id));
            var validationPassed: boolean = true;
            if (index != -1) {
                if(req.body.name) {
                    data.m[index].setName(req.body.name);
                }
                if(req.body.startDate) {
                    const startDateTime = DateTimeParser.parseDateTime(req.body.startDate, data.m[index].getStartTime());
                    const meetingValidator: Meeting = new Meeting(0, "", data.m[index].getStartDateTime(), data.m[index].getDuration(), data.empl1, [], data.mrBatman);
                    if(!Helper.validateMeeting(data.m, meetingValidator)) { 
                        validationPassed = false;
                    } else {
                        data.m[index].setStartDateTime(startDateTime);
                    }
                }
                if(req.body.startTime) {
                    const startDateTime = DateTimeParser.parseDateTime(data.m[index].getStartDate(), req.body.startTime);
                    const meetingValidator: Meeting = new Meeting(0, "", data.m[index].getStartDateTime(), data.m[index].getDuration(), data.empl1, [], data.mrBatman);
                    if(!Helper.validateMeeting(data.m, meetingValidator)) { 
                        validationPassed = false;
                    } else {
                        data.m[index].setStartDateTime(startDateTime);
                    }
                }
                if(req.body.duration) {
                    const duration: Duration = DateTimeParser.parseDuration(req.body.duration);
                    if (duration == Duration.ofMillis(0)) {
                        res.status(400).send(DURATIONPARSEFAILED);
                    } else {
                        const meetingValidator: Meeting = new Meeting(0, "", data.m[index].getStartDateTime(), data.m[index].getDuration(), data.empl1, [], data.mrBatman);
                        if(!Helper.validateMeeting(data.m, meetingValidator)) { 
                            validationPassed = false;
                        } else {
                            data.m[index].setDuration(duration);
                        }
                    }
                }
                if(req.body.host) {
                    data.m[index].setHost(data.e[Helper.arrayIdSearch(data.e, req.body.host)]);
                }
                if(req.body.invited){
                    const invitees: Employee[] = Helper.generateInviteesArray(data.e, req.body.invited);
                    data.m[index].setInvited(invitees)
                }
                if(req.body.meetingRoom){
                    data.m[index].setMeetingRoom(data.mr[Helper.arrayIdSearch(data.mr, req.body.meetingRoom)]);
                }
                if(validationPassed){
                    res.status(200).send(data.m[index].getPrettyPrintedMeetingInfo());
                } else {
                    res.status(409).send(ROOMTAKEN);
                }
            } else {
                res.status(404).send(NOMEETING);
            }
        });

        app.delete(`/${MEETINGS}/:id`, (req: Request, res: Response) => {
            const removedMeeting: Meeting[] = Helper.getObject(data.m, req.params.id);
            if (removedMeeting.length > 0) {
                data.m = data.m.filter(meeting => meeting.getId() !== Number(req.params.id));
                res.status(200).send(removedMeeting[0].getPrettyPrintedMeetingInfo());
            } else {
                res.status(404).send(NOMEETING);
            }
        });
        return app;
    }
}