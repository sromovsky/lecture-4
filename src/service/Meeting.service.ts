import {Meetings} from "../model/Meetings";
import {NewMeeting} from "../model/NewMeeting";
import {LocalTime} from "@js-joda/core";
import {TimeInterval} from "../model/DateTimeInterval";
import {BLOCK_TIME_MINUTES} from "../const/api.const";
import {WORKING_TIME_FROM, WORKING_TIME_TO} from "../const/time.const";

export class MeetingService{
    meetingStorage:Meetings[];


    constructor() {
        this.meetingStorage=[];
    }


    getAll(): Meetings[]{
        return this.meetingStorage.sort((a,b)=>{
            return a.getSecondsFromMidnight()-b.getSecondsFromMidnight();
        })


    }
    add(newMeeting: NewMeeting): number {
        const id = this.meetingStorage.length+1;
        const from = LocalTime.of(newMeeting.getStart());
        const to = from.plusMinutes(BLOCK_TIME_MINUTES);
        const interval = new TimeInterval(from, to);
        const meeting = new Meetings(id,newMeeting.getName(), interval)
        this.meetingStorage.push(meeting)
        return meeting.getId();
    }


    hasStartTime(startTime: number): boolean {
        let match = false
        this.meetingStorage.forEach((meeting)=>{
            if(meeting.getInterval().getFrom().hour()===startTime){
                match = true
            }
        })
        return match;
    }
    freeMeetingTimes(): number[] {
        const result: number[] = [];
        for (let hour = WORKING_TIME_FROM; hour < WORKING_TIME_TO; hour++) {
            if (!this.hasStartTime(hour)) {
                result.push(hour);
            }
        }
        return result;
    }
}