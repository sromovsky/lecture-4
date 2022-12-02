import {describe, expect, test, beforeEach} from '@jest/globals';
import { Duration, LocalDateTime } from '@js-joda/core';
import { Building } from '../model/Building';
import { Employee } from '../model/Employee';
import { Floor } from '../model/Floor';
import { Meeting } from '../model/Meeting';
import { MeetingRoom } from '../model/MeetingRoom';
import {TestData} from './testdata';

describe('Service', () => {

    let testData: TestData;

    beforeEach(() => {
        testData = new TestData('0.0.1');
    });

    //Building test
    test('Test building getId()', () => {
        expect(testData.b1.getId()).toBe(1);
    });
    test('Test building getName()', () => {
        expect(testData.b1.getName()).toBe("CBC 3");
    });
    test('Test building getAddress()', () => {
        expect(testData.b1.getAddress()).toBe("Karadžičová 14");
    });
    test('Test building getCity()', () => {
        expect(testData.b1.getCity()).toBe("Bratislava");
    });
    test('Test building getCountry()', () => {
        expect(testData.b1.getCountry()).toBe("Slovakia");
    });
    test('Test building getFloors()', () => {
        expect(testData.b1.getFloors()).toStrictEqual([testData.b1f1, testData.b1f2]);
    });
    test('Test building getFloor()', () => {
        expect(testData.b1.getFloor(1)).toBe(testData.b1f1);
    });
    test('Test building getPritableBuilding()', () => {
        expect(testData.b1.getPritableBuilding()).toStrictEqual({
            "id": 1,
            "name": "CBC 3",
            "address": "Karadžičová 14",
            "city": "Bratislava",
            "country": "Bratislava",
            "floors": 2
        });
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

    //Floor test
    test('Test floor getId()', () => {
        expect(testData.b1f1.getId()).toBe(1);
    });
    test('Test floor getFloorNum()', () => {
        expect(testData.b1f1.getFloorNum()).toBe(2);
    });
    test('Test floor getMeetingRooms()', () => {
        expect(testData.b1f1.getMeetingRooms()).toStrictEqual([testData.b1f1mr1, testData.b1f1mr2]);
    });

    //MeetingRoom test
    test('Test floor getId()', () => {
        expect(testData.b1f2mr2.getId()).toBe(4);
    });
    test('Test floor getName()', () => {
        expect(testData.b1f2mr2.getName()).toBe("Itadori");
    });
    test('Test floor getCapacity()', () => {
        expect(testData.b1f2mr2.getCapacity()).toBe(10);
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
        expect(testData.meeting1.getMeetingRoom()).toBe(testData.b1f1mr1);
    });
});