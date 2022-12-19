import { TimeInterval } from "../model/timeInterval";

export class Meeting {
    private interval: TimeInterval;
    private name: string;

    constructor(interval: TimeInterval, name: string) {
        this.interval = interval;
        this.name = name;

    }
}