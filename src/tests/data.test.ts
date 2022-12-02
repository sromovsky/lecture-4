import { describe, expect, test, beforeEach } from '@jest/globals';
import { Duration, LocalDateTime } from '@js-joda/core';
import { DateTimeParser } from '../service/parsers/dateTimeParser';
import { TestData } from './testdata';

describe('Service', () => {

    let testData: TestData;

    beforeEach(() => {
        testData = new TestData('0.0.1');
    });

    //Employee test
    test('Test employee getId()', () => {
        expect(testData.empl1.getId()).toBe(1);
    });
    test('Test employee getFirstName()', () => {
        expect(testData.empl1.getFirstName()).toBe("Jozef");
    });
    test('Test employee getLastName()', () => {
        expect(testData.empl1.getLastName()).toBe("Mak");
    });
    test('Test employee getPosition()', () => {
        expect(testData.empl1.getPosition()).toBe("CEO");
    });

    //MeetingRoom test
    test('Test meetingRoom getId()', () => {
        expect(testData.mrItadori.getId()).toBe(4);
    });
    test('Test meetingRoom getName()', () => {
        expect(testData.mrItadori.getName()).toBe("Itadori");
    });
    test('Test meetingRoom getCapacity()', () => {
        expect(testData.mrItadori.getCapacity()).toBe(10);
    });

    //Meeting test
    test('Test meeting getId()', () => {
        expect(testData.meeting1.getId()).toBe(1);
    });
    test('Test meeting getName()', () => {
        expect(testData.meeting1.getName()).toBe("Pohovor");
    });
    test('Test meeting getStartDateTime()', () => {
        expect(testData.meeting1.getStartDateTime()).toStrictEqual(LocalDateTime.parse("2022-11-25T08:00"));
    });
    test('Test meeting getDuration()', () => {
        expect(testData.meeting1.getDuration()).toStrictEqual(Duration.ofHours(2));
    });
    test('Test meeting endTime()', () => {
        let startTime = testData.meeting1.getStartDateTime();
        let duration = testData.meeting1.getDuration();
        let endTime = testData.meeting1.getEndDateTime();
        let endTimeTest = startTime.plus(duration);
        expect(endTime).toStrictEqual(endTimeTest);
    });
    test('Test meeting getHost()', () => {
        expect(testData.meeting1.getHost()).toBe(testData.empl1);
    });
    test('Test meeting getInvited()', () => {
        expect(testData.meeting1.getInvited()).toStrictEqual([]);
    });
    test('Test meeting getMeetingRoom()', () => {
        expect(testData.meeting1.getMeetingRoom()).toBe(testData.mrItadori);
    });
    test('Test meeting getPrettyPrintedMeetingInfo()', () => {
        const expectedOutput = {
            "id": 1,
            "name": "Pohovor",
            "startDateTime": "25.11.2022 @ 08:00",
            "duration": "2 Hours",
            "endDateTime": "25.11.2022 @ 10:00",
            "host": "Jozef Mak (CEO)",
            "inivited": "No invitees",
            "meetingRoom": "Itadori"
        }

        expect(testData.meeting1.getPrettyPrintedMeetingInfo()).toStrictEqual(expectedOutput);
    });
    test('Test meeting getStartDate()', () => {
        expect(testData.meeting1.getStartDate().toString()).toEqual("25.11.2022");
    });
    test('Test meeting getStartTime()', () => {
        expect(testData.meeting1.getStartTime().toString()).toEqual("08:00");
    });
    test('Test meeting setName()', () => {
        testData.meeting1.setName("Test meeting")
        expect(testData.meeting1.getName()).toBe("Test meeting");
    });
    test('Test meeting setStartDateTime()', () => {
        testData.meeting1.setStartDateTime(LocalDateTime.parse("2022-01-01T10:00"));
        expect(testData.meeting1.getStartDateTime().toString()).toEqual("2022-01-01T10:00");
        expect(testData.meeting1.getEndDateTime().toString()).toEqual("2022-01-01T12:00");
    });
    test('Test meeting setDuration()', () => {
        testData.meeting1.setDuration(DateTimeParser.parseDuration("1 hour"));
        expect(testData.meeting1.getDuration().toString()).toEqual("PT1H");
        expect(testData.meeting1.getEndDateTime().toString()).toEqual("2022-11-25T09:00");
    });
    test('Test meeting setHost()', () => {
        testData.meeting1.setHost(testData.empl2)
        expect(testData.meeting1.getHost()).toStrictEqual(testData.empl2);
    });
    test('Test meeting setInvited()', () => {
        testData.meeting1.setInvited([testData.empl1])
        expect(testData.meeting1.getInvited()).toStrictEqual([testData.empl1]);
    });
    test('Test meeting setMeetingRoom()', () => {
        testData.meeting1.setMeetingRoom(testData.mrNaruto)
        expect(testData.meeting1.getMeetingRoom()).toStrictEqual(testData.mrNaruto);
    });

});