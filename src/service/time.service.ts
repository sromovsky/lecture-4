import {AdvancedDateTime} from "../model/AdvancedDateTime";
import {LocalDate, LocalDateTime, LocalTime} from "@js-joda/core";
import {TimeInterval} from "../model/DateTimeInterval";
import {WORKING_TIME_FROM, WORKING_TIME_TO} from "../const/time.const";

export class TimeService{
    constructor() {
    }
    today():AdvancedDateTime{
        return new AdvancedDateTime(LocalDateTime.now());
    }
    workingtime():TimeInterval{
        const from = LocalTime.of(WORKING_TIME_FROM);
        const to = LocalTime.of(WORKING_TIME_TO);
        return new TimeInterval(from,to)}
}