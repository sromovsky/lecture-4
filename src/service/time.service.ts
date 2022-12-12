import {AdvancedDateTime} from '../model/AdvancedDateTime';
import {LocalDateTime, LocalTime} from '@js-joda/core';
import {TimeInterval} from '../model/TimeInterval';
import {SHOW_TIME_FROM, SHOW_TIME_TO} from '../const/time.cont';

export class TimeService {
    constructor() {
    }

    today(): AdvancedDateTime {
        return new AdvancedDateTime(LocalDateTime.now())
    }

    workingTime(): TimeInterval {
        const from = LocalTime.of(SHOW_TIME_FROM);
        const to = LocalTime.of(SHOW_TIME_TO);
        return new TimeInterval(from, to);
    }
}