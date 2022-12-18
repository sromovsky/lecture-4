import {MeetingService} from "./Meeting.service";
import {describe,beforeEach, expect} from "@jest/globals";
import {NewMeeting} from "../model/NewMeeting";

describe('MeetingService', () => {
    let meetingService: MeetingService;

    beforeEach(() => {
        meetingService = new MeetingService();
    })
    test('test sort',()=>{
        const meeting1= new NewMeeting('obed', 12);
        const meeting2= new NewMeeting('imapl2', 13);
        const meeting3= new NewMeeting('imapl', 9);

        meetingService.add(meeting1);
        meetingService.add(meeting2);
        meetingService.add(meeting3);

        const meetings = meetingService.getAll();
        expect(meetings[0].getName()).toBe('imapl');


    });
    test('test sort by time',()=>{
        const meeting1= new NewMeeting('obed', 12);
        const meeting2= new NewMeeting('imapl2', 13);
        const meeting3= new NewMeeting('imapl', 9);

        meetingService.add(meeting1);
        meetingService.add(meeting2);
        meetingService.add(meeting3);

        const meetings = meetingService.getAll();
        expect(meetings[2].getName()).toBe('imapl2');


    });
    test('test startTime=',()=>{
        const meeting1= new NewMeeting('obed', 12);
        const meeting2= new NewMeeting('imapl2', 13);

        meetingService.add(meeting1);
        meetingService.add(meeting2);

        expect(meetingService.hasStartTime(12)).toBe(true);


    });
    test('test startTime=/l',()=>{
        const meeting1= new NewMeeting('obed', 14);
        const meeting2= new NewMeeting('imapl2', 13);

        meetingService.add(meeting1);
        meetingService.add(meeting2);

        expect(meetingService.hasStartTime(12)).toBe(false);


    });

})