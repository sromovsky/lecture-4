import { DateTimeFormatter, Duration, LocalDateTime } from "@js-joda/core";
import { Employee } from "./Employee";
import { MeetingRoom } from "./MeetingRoom";
import { DateTimeParser } from "../service/parsers/dateTimeParser";
import { InvitedParser } from "../service/parsers/invitedParser";

export class Meeting {
    private id: number;
    private name: string;
    private startDateTime: LocalDateTime;
    private duration: Duration;
    private endDateTime: LocalDateTime;
    private host: Employee;
    private invited: Employee[];
    private meetingRoom: MeetingRoom;

    constructor(id: number, name: string, startDateTime: LocalDateTime, duration: Duration, host: Employee, invited: Employee[], meetingRoom: MeetingRoom) {
        this.id = id;
        this.name = name;
        this.startDateTime = startDateTime;
        this.duration = duration;
        this.endDateTime = startDateTime.plus(duration);
        this.host = host;
        this.invited = invited;
        this.meetingRoom = meetingRoom;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getStartDateTime() {
        return this.startDateTime;
    }
    getDuration() {
        return this.duration;
    }
    getEndDateTime() {
        return this.endDateTime;
    }
    getHost() {
        return this.host;
    }
    getInvited() {
        return this.invited;
    }
    getMeetingRoom() {
        return this.meetingRoom;
    }

    getPrettyPrintedMeetingInfo() {
        return {
            "id": this.id,
            "name": this.name,
            "startDateTime": DateTimeParser.prettyPrintDateTime(this.startDateTime),
            "duration": DateTimeParser.prettyPrintDuration(this.duration),
            "endDateTime": DateTimeParser.prettyPrintDateTime(this.endDateTime),
            "host": `${this.host.getFirstName()} ${this.host.getLastName()} (${this.host.getPosition()})`,
            "inivited": InvitedParser.prettyPrintInvited(this.invited),
            "meetingRoom": this.meetingRoom.getName()
        }
    }
    getStartDate(){
        const formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
        const date = this.startDateTime.format(formatter);
        return date;
    }
    getStartTime(){
        const formatter = DateTimeFormatter.ofPattern("HH:mm");
        const time = this.startDateTime.format(formatter);
        return time;
    }
    setName(name: string){
        this.name = name;
    }
    setStartDateTime(dateTime: LocalDateTime) {
        this.startDateTime = dateTime;
        this.endDateTime = this.startDateTime.plus(this.duration);
    }
    setDuration(duration: Duration) {
        this.duration = duration;
        this.endDateTime = this.startDateTime.plus(this.duration);
    }
    setHost(host: Employee) {
        this.host = host;
    }
    setInvited(invited: Employee[]) {
        this.invited = invited;
    }
    setMeetingRoom(meetingRoom: MeetingRoom) {
        this.meetingRoom = meetingRoom;
    }


}