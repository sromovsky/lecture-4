import { AdvancedDateTime } from "../model/AdvancedDateTime"
import { LocalDateTime, LocalTime } from "@js-joda/core"
import { TimeInterval } from "../model/timeInterval"

export class TimeService {
    constructor() { }

    today(): AdvancedDateTime {
        return new AdvancedDateTime(LocalDateTime.now())

    }

    workingTime(): TimeInterval {
        const from = LocalTime.of(8);
        const to = LocalTime.of(16);
        return new TimeInterval(from, to);
    }
}
