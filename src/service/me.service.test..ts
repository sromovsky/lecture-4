import {describe, expect, test, beforeEach} from '@jest/globals';
import {MeService} from './me.service';

describe('Service for students data', () => {

    let meService: MeService;

    beforeEach(() => {
        meService = new MeService('0.0.1');
    });

    test('Test healthcheck identifier', () => {
        const myData = meService.myData();
        expect(myData.getVerification()).toBe('0.0.1');
    });
});