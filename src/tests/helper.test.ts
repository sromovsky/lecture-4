import { describe, expect, test, beforeEach } from '@jest/globals';
import { Duration, LocalDateTime } from '@js-joda/core';
import { Meeting } from '../model/Meeting';
import { Helper } from '../service/helper';
import { TestData } from './testdata';

describe('Service', () => {

    let testData: TestData;

    beforeEach(() => {
        testData = new TestData('0.0.1');
    });

    test('arrayIdSearch() test with id 1', () => {
        expect(Helper.arrayIdSearch(testData.e, 1)).toBe(0);
    });

    test('arrayIdSearch() test without result', () => {
        expect(Helper.arrayIdSearch(testData.e, 3)).toBe(-1);
    });

    test('getNextId() test', () => {
        expect(Helper.getNextId(testData.e)).toBe(3);
    });

    test('getObject() test', () => {
        expect(Helper.getObject(testData.e, 1)).toStrictEqual([testData.e[0]]);
    });

    test('generateInviteesArray() test', () => {
        expect(Helper.generateInviteesArray(testData.e, [1, 2])).toEqual([{ "firstName": "Jozef", "id": 1, "lastName": "Mak", "position": "CEO" }, { "firstName": "Stano", "id": 2, "lastName": "Vysoký", "position": "CEE" }]);
    });

    test('validateMeeting() test - FALSE', () => {
        const invalidMeeting: Meeting = new Meeting(0, "Invalid meeting", LocalDateTime.parse("2022-11-25T09:00"), Duration.ofHours(1), testData.empl1, [testData.empl2], testData.mrItadori)
        expect(Helper.validateMeeting(testData.m, invalidMeeting)).toEqual(false);
    });

    test('validateMeeting() test - TRUE (different meeting room)', () => {
        const validMeeting: Meeting = new Meeting(0, "Valid meeting", LocalDateTime.parse("2022-11-25T09:00"), Duration.ofHours(1), testData.empl1, [testData.empl2], testData.mrBatman)
        expect(Helper.validateMeeting(testData.m, validMeeting)).toEqual(true);
    });

    test('validateMeeting() test - TRUE (different time)', () => {
        const validMeeting: Meeting = new Meeting(0, "Valid meeting", LocalDateTime.parse("2022-11-25T10:00"), Duration.ofHours(1), testData.empl1, [testData.empl2], testData.mrItadori)
        expect(Helper.validateMeeting(testData.m, validMeeting)).toEqual(true);
    });

});