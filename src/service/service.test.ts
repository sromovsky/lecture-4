import {describe, expect, test, beforeEach} from '@jest/globals';
import {Service} from './service';

describe('Service', () => {

    let service: Service;

    beforeEach(() => {
        service = new Service('0.0.1');
    });

    test('Test healthcheck identifier', () => {
        const healthcheck = service.healthcheck();
        expect(healthcheck.getIdentifier()).toBe('0.0.1');
    });

    test('Test test endpoint', () => {
        const testResponse = service.test();
        expect(testResponse.test).toBe('OK');
    });
});