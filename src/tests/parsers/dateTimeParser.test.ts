import {describe, expect, test} from '@jest/globals';
import { Duration, LocalDateTime } from '@js-joda/core';
import { DateTimeParser } from '../../service/parsers/dateTimeParser';

describe('Service', () => {

    test('Test prettyPrintDateTime()', () => {
        expect(DateTimeParser.prettyPrintDateTime(LocalDateTime.parse("2022-11-25T09:00"))).toBe("25.11.2022 @ 09:00");
    });

    test('Test prettyPrintDuration()', () => {
        expect(DateTimeParser.prettyPrintDuration(Duration.ofHours(1))).toBe("1 Hour");
        expect(DateTimeParser.prettyPrintDuration(Duration.ofHours(2))).toBe("2 Hours");
        expect(DateTimeParser.prettyPrintDuration(Duration.ofMinutes(1))).toBe("1 Minute");
        expect(DateTimeParser.prettyPrintDuration(Duration.ofMinutes(30))).toBe("30 Minutes");
    });

});