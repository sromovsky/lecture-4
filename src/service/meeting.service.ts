import {Meeting} from '../model/Meeting';
import {NewMeeting} from '../model/NewMeeting';
import {TimeInterval} from '../model/TimeInterval';
import {LocalTime} from '@js-joda/core';
import {BLOCK_TIME_MINUTES, WORKING_TIME_FROM, WORKING_TIME_TO} from '../const/time.cont';

export class MeetingService {
    meetingStorage: Meeting[];

    constructor() {
        this.meetingStorage = [];
    }

    getAll(): Meeting[] {
        return this.meetingStorage.sort((a, b) => {
            return a.getSecondsFromMidnight() - b.getSecondsFromMidnight();
        });
    }

    add(newMeeting: NewMeeting): number {
        const from = LocalTime.of(newMeeting.getStart());
        const to = from.plusMinutes(BLOCK_TIME_MINUTES);
        const interval = new TimeInterval(from, to);
        const id = this.meetingStorage.length + 1;
        const meeting = new Meeting(id, newMeeting.getName(), interval);
        this.meetingStorage.push(meeting);
        return meeting.getId();
    }

    hasStartTime(startTime: number): boolean {
        let match = false;
        this.meetingStorage.forEach(meeting => {
            if (meeting.getInterval().getFrom().hour() === startTime) {
                match = true;
            }
        });
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