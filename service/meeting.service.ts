import {Meeting} from '../model/Meeting';
import {NewMeeting} from '../model/NewMeeting';
import {TimeInterval} from '../model/TimeInterval';
import {LocalTime} from '@js-joda/core';
import {BLOCK_TIME_MINUTES} from '../const/time.cont';

export class MeetingService {
    meetingStorage: Meeting[];

    constructor() {
        this.meetingStorage = [];
    }

    getAll(): Meeting[] {
        return this.meetingStorage;
    }

    add(newMeeting: NewMeeting): number {
        const from = LocalTime.of(newMeeting.getStart());
        const to = from.plusMinutes(BLOCK_TIME_MINUTES);
        const interval = new TimeInterval(from, to);
        const meeting = new Meeting(newMeeting.getName(), interval)
        return this.meetingStorage.push(meeting);
    }
}