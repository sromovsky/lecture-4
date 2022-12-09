import {TimeInterval} from './TimeInterval';

export class Meeting {
    private id: number;
    private name: string;
    private interval: TimeInterval;

    constructor(id: number, name: string, interval: TimeInterval) {
        this.id = id;
        this.name = name;
        this.interval = interval;
    }

    getId(): number {
        return this.id;
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