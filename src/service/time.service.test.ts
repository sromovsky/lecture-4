import { describe, expect, test, beforeEach } from '@jest/globals';
import { AdvancedDateTime } from '../model/AdvancedDateTime';
import { TimeService } from './time.service';
import { LocalDateTime } from "@js-joda/core";

describe('TimeService', () => {

    let timeService: TimeService;

    beforeEach(() => {
        timeService = new TimeService();
    });

    test('', () => {
        const date = LocalDateTime.of(2022, 12, 2, 13, 0)

        /*const expectedObject: AdvancedDateTime = new AdvancedDateTime(LocalDateTime.now())
        expect(timeService.today()).toEqual(expectedObject);*/

        const advancedDateTime: AdvancedDateTime = new AdvancedDateTime(date);

        const expectedObject = {
            date: "2023-1-1",
            time: "00:00:01",
            dateTime: '2023'
        }
});