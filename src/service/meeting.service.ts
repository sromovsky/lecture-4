import { Meeting } from "../model/Meeting";


export class MeetingService {

    meetingStorage: Meeting[];

    constructor() {
        
            this.meetingStorage = [];
    }
   
    getAll(): Meeting[] {
        return this.meetingStorage;
    }

    
}