import {TimeService} from './time.service';
import {describe, expect, test, beforeEach} from '@jest/globals';
import {AdvancedDateTime} from '../model/AdvancedDateTime';
import {LocalDateTime} from '@js-joda/core';
describe('TimeService', () => {

    let timeService: TimeService;

    beforeEach(() => {
        timeService = new TimeService();
    });

    test('AdvancedDateTime from LocalDate without seconds', () => {
        const date = LocalDateTime.of(2022, 12, 2, 13, 0);
        const advancedDateTime: AdvancedDateTime
            = new AdvancedDateTime(date);
        const expectedObject = {
            date: '2022-12-02',
            time: '13:00',
            dateTime: '2022-12-02T13:00'
        };
        expect(advancedDateTime).toEqual(expectedObject);
    });


    test('AdvancedDateTime from LocalDate with seconds', () => {
        const date = LocalDateTime.of(2023, 1, 1, 0, 0, 1);
        const advancedDateTime: AdvancedDateTime
            = new AdvancedDateTime(date);
        const expectedObject = {
            date: '2023-01-01',
            time: '00:00',
            dateTime: '2023-01-01T00:00'
        };
        expect(advancedDateTime).toEqual(expectedObject);
    });
});