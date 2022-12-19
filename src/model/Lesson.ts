import {TimeInterval} from './TimeInterval';

export class Lesson {
    private id: number;
    private day: string;
    private shortcut: string;
    private name: string;
    private interval: TimeInterval;


    constructor(id: number, day: string, shortcut: string, name: string, interval: TimeInterval) {
        this.id =  id;
        this.day = day;
        this.shortcut = shortcut;
        this.name = name;
        this.interval = interval;
    }

    getId(): number {
        return this.id;
    }

    getShortcut(): string  {
        return this.shortcut;
    }

    getName(): string {
        return this.name;
    }

    getDay(): string {
        return this.day;
    }

    getSecondsFromMidnight(): number {
        const startTime = this.interval.getFrom();
        return startTime.toSecondOfDay();
    }

    getInterval(): TimeInterval {
        return this.interval;
    }
}