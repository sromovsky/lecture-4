import { LocalDateTime, LocalTime } from '@js-joda/core';
import { AdvancedDateTime } from '../model/AdvancedDateTime';

export class TimeInterval {
    private from: LocalTime;
    private to: LocalDateTime;

    constructor(from: LocalTime, to: LocalTime) {
        this.from = from;
        this.to = to;

    }
}