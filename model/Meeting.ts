import {TimeInterval} from './TimeInterval';

export class Meeting {
    private name: string;
    private interval: TimeInterval;

    constructor(name: string, interval: TimeInterval) {
        this.name = name;
        this.interval = interval;
    }
}