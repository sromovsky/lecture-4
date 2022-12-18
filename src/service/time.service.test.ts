import {describe, expect, test, beforeEach} from '@jest/globals';
import {Service} from './service';
import {TimeService} from "./time.service";
import {AdvancedDateTime} from "../model/AdvancedDateTime";
import {LocalDateTime} from "@js-joda/core";

describe('TimeService', () => {

    let timeservice: TimeService;

    beforeEach(() => {
        timeservice = new TimeService();
    });

    test('advanced date time without seconds', () => {
        const date = LocalDateTime.of(2023,12,2,0,0)
        const advancedDateTime: AdvancedDateTime = new AdvancedDateTime(date);

        const expectedObject = {
            date: '2022-12-02',
            time: '13:00',
            dateTime: '2023-12-02T00:00'
        }
        expect(advancedDateTime).toEqual(expectedObject);
    });


    test('advanced date time with seconds', () => {
        const date = LocalDateTime.of(2023,12,2,0,0)
        const advancedDateTime: AdvancedDateTime = new AdvancedDateTime(date);

        const expectedObject = {
            date: '2023-12-02',
            time: '00:00',
            dateTime: '2023-12-02T00:00'
        }
        expect(advancedDateTime).toEqual(expectedObject);
    });
});