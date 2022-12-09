import {describe, expect, test, beforeEach} from '@jest/globals';
import {MeetingService} from './service';

describe('Service', () => {

    let meetingService: MeetingService;

    beforeEach(() => {
        meetingService = new MeetingService('');
    })

    test('Test healthcheck identifier', () => {
        const healthcheck = meetingService.healthcheck();
        expect(healthcheck.getIdentifier()).toBe('0.0.1');
    });
});