import {TimeInterval} from "./TimeInterval";
import {LocalTime, TemporalQueries} from "@js-joda/core";
import localTime = TemporalQueries.localTime;

export class NewLesson {
    private id: number;
    private day: string;
    private shortcut: string;
    private name: string;
    private interval: TimeInterval;

    constructor(id: number, day: string, shortcut: string, name: string | undefined, start: string, end: string | undefined) {
        this.id = id;
        this.day = day;
        this.shortcut = shortcut;
        this.name = name ? name : 'Meeting';

        const startTimes = start.split(":");
        const startH = Number(startTimes.shift());
        const startM = Number(startTimes.shift());
        const startTime = LocalTime.of(startH, startM);
        let endTime = startTime.plusMinutes(91)
        if (end){
            const endTimes = end.split(":");
            const endH = Number(endTimes.shift());
            const endM = Number(endTimes.shift())+1;
            endTime = LocalTime.of(endH, endM);
        }
        this.interval = new TimeInterval(startTime,endTime);
    }

    getID(): number {
        return this.id;
    }

    getShortcut(): string {
        return this.shortcut;
    }

    getName(): string {
        return this.name;
    }

    getInterval(): TimeInterval{
        return this.interval;
    }

    getDay(): string{
        return this.day;
    }

}