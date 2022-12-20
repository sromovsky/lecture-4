import {beforeEach, describe} from "@jest/globals";
import {MeetingService} from "./meeting.service";
import {NewMeeting} from "../model/NewMeeting";


describe('MeetingService', () => {

    let meetingService: MeetingService;

    beforeEach(() => {
        meetingService = new MeetingService();
    });
    test('name', () => {
        const newMeeting1 = new NewMeeting('Obed', 12);
        const newMeeting2 = new NewMeeting('IMAPL', 9);
        const newMeeting3 = new NewMeeting('IMAPL2',14);

        meetingService.add(newMeeting1)
        meetingService.add(newMeeting2)
        meetingService.add(newMeeting3)

        const meetingService: MeetingService[0];
        const meetingService: MeetingService[1];
        const meetingService: MeetingService[1];



    });
});



