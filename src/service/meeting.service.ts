import { Meeting } from "../model/Meeting";
import { NewMeeting } from "../model/NewMeeting";
import { TimeInterval } from "../model/TimeInterval";
import { LocalTime } from "@js-joda/core";
import { BLOCK_TIME_MINUTES } from "../const/time.cont";

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

  getAllForDay(day: string) {
    return this.meetingStorage.filter(
      (meeting) => meeting.getDate().dayOfMonth() === parseInt(day, 10)
    );
  }

  add(newMeeting: NewMeeting): number {
    const from = LocalTime.of(newMeeting.getStart());
    const to = from.plusMinutes(BLOCK_TIME_MINUTES);
    const interval = new TimeInterval(from, to);
    const id = this.meetingStorage.length + 1;
    const meeting = new Meeting(
      id,
      newMeeting.getName(),
      interval,
      newMeeting.getDate()
    );
    this.meetingStorage.push(meeting);
    return meeting.getId();
  }

  hasStartTime(startTime: number, day: number): boolean {
    let match = false;
    this.meetingStorage.forEach((meeting) => {
      if (meeting.getDate().dayOfMonth() !== day) return;
      if (meeting.getInterval().getFrom().hour() != startTime) return;

      match = true;
    });
    return match;
  }
}
