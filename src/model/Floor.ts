import { Building } from "./Building";
import { MeetingRoom } from "./MeetingRoom";

export class Floor {
    private id: number;
    private floorNum: number;
    private meetingRooms: MeetingRoom[];
    constructor(id: number, floorNum: number, meetingRooms: MeetingRoom[]) {
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