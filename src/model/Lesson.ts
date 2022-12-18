import {TimeInterval} from './TimeInterval';

export class Lesson {
    private id: number;
    private shortcut: string;
    private name: string;
    private interval: TimeInterval;


    constructor(id: number, shortcut: string, name: string, interval: TimeInterval) {
        this.id =  id;
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


    getSecondsFromMidnight(): number {
        const startTime = this.interval.getFrom();
        return startTime.toSecondOfDay();
    }

    getInterval(): TimeInterval {
        return this.interval;
    }
}