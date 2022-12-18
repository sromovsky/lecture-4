import {LocalTime} from '@js-joda/core';
import {type} from "os";

export class TimeInterval {
    private from: LocalTime;
    private to: LocalTime

    constructor(from: LocalTime, to: LocalTime) {
        this.from = from;
        this.to = to;
    }

    getFrom(): LocalTime {
        return this.from;
    }

    getLessonTimes():string[]{
        const times = [];
        let currentTime = this.from;
        while (currentTime.compareTo(this.to) === -1){
           const hours = currentTime.hour();
           const minutes = currentTime.minute().toString().padEnd(2,"0");
            times.push(`${hours}:${minutes}`);
            currentTime = currentTime.plusMinutes(15);
        }
        return times;

    }
}