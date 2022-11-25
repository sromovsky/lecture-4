import { Building } from "./Building";
import { MeetingRoom } from "./MeetingRoom";

export class Floor {
    private id: Number;
    private floorNum: Number;
    private meetingRooms: MeetingRoom[];
    constructor(id: Number, floorNum: Number, meetingRooms: MeetingRoom[]) {
        this.id = id;
        this.floorNum = floorNum;
        this.meetingRooms = meetingRooms;
    }
    getId() {
        return this.id;
    }
    getFloorNum() {
        return this.floorNum;
    }
    getMeetingRooms() {
        return this.meetingRooms;
    }
}