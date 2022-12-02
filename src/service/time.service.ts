import {AdvancedDateTime} from '../model/AdvancedDateTime';
import {LocalDateTime} from '@js-joda/core';

export class TimeService {
    constructor() {
    }

    today(): AdvancedDateTime {
        return new AdvancedDateTime(LocalDateTime.now())
    }
}