import {NewMeeting} from '../model/NewMeeting';
import {MeetingService} from "./meeting.service";
import {describe, expect, test, beforeEach} from '@jest/globals';
describe('meetingService', () => {



let meetingService: MeetingService;
    beforeEach(() => {
        meetingService = new MeetingService();
    });
    test('meetingService',()=>{
        const newMeeting1 = new NewMeeting('obed', 12);
        const newMeeting2 = new NewMeeting('IMAPL', 9);
        const newMeeting3 = new NewMeeting('IMAPL2', 20);

        meetingService.add(newMeeting1);
        meetingService.add(newMeeting2);
        meetingService.add(newMeeting3);

        const meetings =  meetingService.getAll();
        expect(meetings[0].getName()).toBe('obed')
    });
});

