import { describe, expect, test } from '@jest/globals';
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

    test('Test parseDateTime()', () => {
        expect(DateTimeParser.parseDateTime("01.01.2022", "10:00")).toEqual(LocalDateTime.parse("2022-01-01T10:00"));
        expect(DateTimeParser.parseDateTime("1.1.2022", "10:00")).toEqual(LocalDateTime.parse("2022-01-01T10:00"));
        expect(DateTimeParser.parseDateTime("01.1.2022", "10:00")).toEqual(LocalDateTime.parse("2022-01-01T10:00"));
        expect(DateTimeParser.parseDateTime("1.01.2022", "10:00")).toEqual(LocalDateTime.parse("2022-01-01T10:00"));
        expect(DateTimeParser.parseDateTime("1.1.2022", "9:00")).toEqual(LocalDateTime.parse("2022-01-01T09:00"));
        expect(DateTimeParser.parseDateTime("01.01.2022", "9:00")).toEqual(LocalDateTime.parse("2022-01-01T09:00"));
    });

    test('Test parseDuration()', () => {
        expect(DateTimeParser.parseDuration("1 hour")).toEqual(Duration.ofHours(1));
        expect(DateTimeParser.parseDuration("1 hours")).toEqual(Duration.ofHours(1));
        expect(DateTimeParser.parseDuration("1 minute")).toEqual(Duration.ofMinutes(1));
        expect(DateTimeParser.parseDuration("1 minutes")).toEqual(Duration.ofMinutes(1));
    });

    test('Test parseDuration() invalid input', () => {
        expect(DateTimeParser.parseDuration("1 x")).toEqual(Duration.ofMillis(0));
    });

});