import {AdvancedDateTime} from '../model/AdvancedDateTime';
import {LocalDateTime, LocalTime} from '@js-joda/core';
import {TimeInterval} from '../model/TimeInterval';
import {WORKING_TIME_FROM, WORKING_TIME_TO} from '../const/time.cont';

export class TimeService {
    constructor() {
    }

    today(): AdvancedDateTime {
        return new AdvancedDateTime(LocalDateTime.now())
    }

    workingTime(): TimeInterval {
        const from = LocalTime.of(WORKING_TIME_FROM);
        const to = LocalTime.of(WORKING_TIME_TO);
        return new TimeInterval(from, to);
    }
}