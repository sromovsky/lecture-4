import {describe, expect, test, beforeEach} from '@jest/globals';
import { Duration, LocalDateTime } from '@js-joda/core';
import { Building } from '../model/Building';
import { Employee } from '../model/Employee';
import { Floor } from '../model/Floor';
import { Meeting } from '../model/Meeting';
import { MeetingRoom } from '../model/MeetingRoom';
import {Data} from './data';

describe('Service', () => {

    const empl1 = new Employee(1, "Jozef", "Mak", "CEO");
    const empl2 = new Employee(2, "Stano", "Vysoký", "CEE");
    const empl3 = new Employee(3, "Martina", "Stručná", "Developer");
    const empl4 = new Employee(4, "Simon", "Starý", "Developer");
    const empl5 = new Employee(5, "Michal", "Šifra", "Head of Development");

    // Building 1 - Floor 1
    const b1f1mr1 = new MeetingRoom(1, "Batman", 4);
    const b1f1mr2 = new MeetingRoom(2, "Naruto", 8);
    const b1f1 = new Floor(1, 2, [b1f1mr1, b1f1mr2]);
    // Building 1 - Floor 2
    const b1f2mr1 = new MeetingRoom(3, "Spiderman", 4);
    const b1f2mr2 = new MeetingRoom(4, "Itadori", 10);
    const b1f2 = new Floor(2, 3, [b1f2mr1, b1f2mr2]);
    // Building 1
    const b1 = new Building(1, "CBC 3", "Karadžičová 14", "Bratislava", "Slovakia", [b1f1, b1f2]);

    const meeting1 = new Meeting(1, "Pohovor", LocalDateTime.parse("2022-11-25T08:00"), Duration.ofHours(2), empl5, [], b1f1mr1);

    let data: Data;

    beforeEach(() => {
        data = new Data('0.0.1');
    });

    //Building test
    test('Test building getId()', () => {
        expect(b1.getId()).toBe(1);
    });
    test('Test building getName()', () => {
        expect(b1.getName()).toBe("CBC 3");
    });
    test('Test building getAddress()', () => {
        expect(b1.getAddress()).toBe("Karadžičová 14");
    });
    test('Test building getCity()', () => {
        expect(b1.getCity()).toBe("Bratislava");
    });
    test('Test building getCountry()', () => {
        expect(b1.getCountry()).toBe("Slovakia");
    });
    test('Test building getFloors()', () => {
        expect(b1.getFloors()).toStrictEqual([b1f1, b1f2]);
    });

    //Employee test
    test('Test employee getId()', () => {
        expect(empl1.getId()).toBe(1);
    });
    test('Test employee getFirstName()', () => {
        expect(empl1.getFirstName()).toBe("Jozef");
    });
    test('Test employee getLastName()', () => {
        expect(empl1.getLastName()).toBe("Mak");
    });
    test('Test employee getPosition()', () => {
        expect(empl1.getPosition()).toBe("CEO");
    });

    //Floor test
    test('Test floor getId()', () => {
        expect(b1f1.getId()).toBe(1);
    });
    test('Test floor getFloorNum()', () => {
        expect(b1f1.getFloorNum()).toBe(2);
    });
    test('Test floor getMeetingRooms()', () => {
        expect(b1f1.getMeetingRooms()).toStrictEqual([b1f1mr1, b1f1mr2]);
    });

    //MeetingRoom test
    test('Test floor getId()', () => {
        expect(b1f2mr2.getId()).toBe(4);
    });
    test('Test floor getName()', () => {
        expect(b1f2mr2.getName()).toBe("Itadori");
    });
    test('Test floor getCapacity()', () => {
        expect(b1f2mr2.getCapacity()).toBe(10);
    });

    //Meeting test
    test('Test floor getId()', () => {
        expect(meeting1.getId()).toBe(1);
    });
    test('Test floor getName()', () => {
        expect(meeting1.getName()).toBe("Pohovor");
    });
    test('Test floor getStartDateTime()', () => {
        expect(meeting1.getStartDateTime()).toStrictEqual(LocalDateTime.parse("2022-11-25T08:00"));
    });
    test('Test floor getDuration()', () => {
        expect(meeting1.getDuration()).toStrictEqual(Duration.ofHours(2));
    });
    test('Test meeting endTime()', () => {
        let startTime = meeting1.getStartDateTime();
        let duration = meeting1.getDuration();
        let endTime = meeting1.getEndDateTime();
        let endTimeTest = startTime.plus(duration);
        expect(endTime).toStrictEqual(endTimeTest);
    });
    test('Test floor getHost()', () => {
        expect(meeting1.getHost()).toStrictEqual(empl5);
    });
    test('Test floor getInvited()', () => {
        expect(meeting1.getInvited()).toStrictEqual([]);
    });
    test('Test floor getMeetingRoom()', () => {
        expect(meeting1.getMeetingRoom()).toStrictEqual(b1f1mr1);
    });
});