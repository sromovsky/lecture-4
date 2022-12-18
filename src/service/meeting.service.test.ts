import {NewMeeting} from '../model/NewMeeting';
import {MeetingService} from "./meeting.service";
import {describe, expect, test, beforeEach} from '@jest/globals';

    describe('MeetingService', () => {
        let meetingService: MeetingService;

        beforeEach(() => {
            meetingService = new MeetingService();
    });

    test('Meetings sort by time', () => {
        const newMeeting1 = new NewMeeting('Obed', 12);
        const newMeeting2 = new NewMeeting('IMAPL', 9);
        const newMeeting3 = new NewMeeting('IMAPL2', 13);

        meetingService.add(newMeeting1);
        meetingService.add(newMeeting2);
        meetingService.add(newMeeting3);

        const meetings = meetingService.getAll();
        expect(meetings[0].getName()).toBe('IMAPL');
    });

    test('Meetings sort by time', () => {
        const newMeeting1 = new NewMeeting('Obed', 12);
        const newMeeting2 = new NewMeeting('IMAPL2', 13);
        const newMeeting3 = new NewMeeting('IMAPL', 9);

        meetingService.add(newMeeting1);
        meetingService.add(newMeeting2);
        meetingService.add(newMeeting3);

        const meetings = meetingService.getAll();
        expect(meetings[2].getName()).toBe('IMAPL2');
    });

    test('Meetings has startTime 9', () => {
        const newMeeting1 = new NewMeeting('IMAPL2', 12);
        const newMeeting2 = new NewMeeting('IMAPL', 9);

        meetingService.add(newMeeting1);
        meetingService.add(newMeeting2);

        expect(meetingService.hasStartTime(9)).toBe(true);
    });

    test('Meetings has not startTime 9', () => {
        const newMeeting1 = new NewMeeting('IMAPL2', 12);
        const newMeeting2 = new NewMeeting('IMAPL', 10);

        meetingService.add(newMeeting1);
        meetingService.add(newMeeting2);

        expect(meetingService.hasStartTime(9)).toBe(false);
    });
});

