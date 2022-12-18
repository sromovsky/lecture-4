import {TimeInterval} from "./TimeInterval";

export class Meeting {
    private interval: TimeInterval;
    private name: string;

    constructor(interval:TimeInterval, name:string) {
        this.interval = interval;
        this.name = name;
    }
}