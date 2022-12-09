import {beforeEach, describe} from '@jest/globals';
import {MeetingService} from './meeting.service';
import {NewMeeting} from '../model/NewMeeting';

describe('MeetingService', () => {
    let meetingService: MeetingService;

    beforeEach(() => {
        meetingService = new MeetingService();
    });

    test('Meetings sort by time', () => {
        const newMeeting1 = new NewMeeting('Test1', 12);
        const newMeeting2 = new NewMeeting('Test2', 9);
        const newMeeting3 = new NewMeeting('Test3', 13);

        meetingService.add(newMeeting1);
        meetingService.add(newMeeting2);
        meetingService.add(newMeeting3);

        const meetings = meetingService.getAll();
        expect(meetings[0].getName()).toBe('IMAPL');
    });

    test('Meetings sort by time', () => {
        const newMeeting1 = new NewMeeting('Test1', 12);
        const newMeeting2 = new NewMeeting('Test2', 13);
        const newMeeting3 = new NewMeeting('Test3', 9);

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