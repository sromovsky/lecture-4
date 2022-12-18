import {TimeInterval} from "./DateTimeInterval";


export class Meetings{

    private interval:TimeInterval;
    private name:string;
    private id:number;

    constructor(id: number, name: string, interval:TimeInterval) {
        this.interval=interval;
        this.name=name;
        this.id=id;
    }

    getName(): string {
        return this.name;
    }

    getId(): number {
        return this.id;
    }

    getSecondsFromMidnight(): number {
        return this.interval.getFrom().toSecondOfDay();
    }

    getInterval(): TimeInterval {
        return this.interval;
    }
}