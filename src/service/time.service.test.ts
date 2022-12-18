import {describe, expect, test, beforeEach} from '@jest/globals';
import {TimeService} from "./time.service";
import {AdvancedDateTime} from "./AdvancedDateTime";
import {LocalDateTime} from "@js-joda/core";

describe('TimeService', () => {

    let timeService: TimeService;

    beforeEach(() => {
        timeService = new TimeService();
    });

    test("AdvancedDateTime from LocalDate with seconds ", () => {
        const date = LocalDateTime.of(2022,1, 1, 0, 0, 1)
        const advancedDateTime:AdvancedDateTime = new AdvancedDateTime(date);
        const expectedObject = {
            date: "2023-01-01",
            time: "0:0",
            dateTime: "2023-01-01T00:00"
        };
        expect(advancedDateTime).toEqual(expectedObject);

    });
});