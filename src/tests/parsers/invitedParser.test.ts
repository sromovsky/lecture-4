import { describe, expect, test } from '@jest/globals';
import { InvitedParser } from '../../service/parsers/invitedParser';
import { TestData } from '../testdata';

describe('Service', () => {

    let testData: TestData;

    beforeEach(() => {
        testData = new TestData('0.0.1');
    });

    test('Test prettyPrintDateTime()', () => {
        expect(InvitedParser.prettyPrintInvited([])).toBe("No invitees");
        expect(InvitedParser.prettyPrintInvited([testData.empl1])).toBe("Jozef Mak (CEO)");
        expect(InvitedParser.prettyPrintInvited([testData.empl1, testData.empl2])).toBe("Jozef Mak (CEO), Stano Vysoký (CEE)");
    });


});