import {LocalTime} from '@js-joda/core';

export class TimeInterval {
    private from: LocalTime;
    private to: LocalTime

    constructor(from: LocalTime, to: LocalTime) {
        this.from = from;
        this.to = to;
    }
}