import {LocalDateTime} from "@js-joda/core";

export class AdvancedDateTime {
    private date: string;
    private time: string;
    private dateTime: string;

    constructor(dateTime: LocalDateTime) {
        dateTime = dateTime
            .withSecond(0)
            .withNano(0)


        this.date = dateTime.toLocalDate().toString();
        this.time = dateTime.toLocalTime().toString();
        this.dateTime = dateTime.toString();
    }
}