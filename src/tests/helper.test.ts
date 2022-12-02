import {describe, expect, test, beforeEach} from '@jest/globals';
import {Service} from '../service/service';
import {Helper} from '../service/helper';
import { TestData } from './testdata';

describe('Service', () => {

    let testData: TestData;

    beforeEach(() => {
        testData = new TestData('0.0.1');
    });

    test('arrayIdSearch() test with id 1', () => {
        expect(Helper.arrayIdSearch(testData.b, 1)).toBe(0);
        expect(Helper.arrayIdSearch(testData.e, 1)).toBe(0);
    });

    test('arrayIdSearch() test without result', () => {
        expect(Helper.arrayIdSearch(testData.b, 2)).toBe(-1);
        expect(Helper.arrayIdSearch(testData.e, 2)).toBe(-1);
    });

});