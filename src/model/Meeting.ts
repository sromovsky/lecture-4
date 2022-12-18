import {TimeInterval} from './TimeInterval';

export class Meeting {
    private name: string;
    private interval: TimeInterval;

    constructor(name: string, interval: TimeInterval) {
        this.name = name;
        this.interval = interval;
    }

    getName() {
        return this.name;
    }

    getSecondsFromMidnight(): number {
        const startTime = this.interval.getFrom();
        return startTime.toSecondOfDay();
    }

}
