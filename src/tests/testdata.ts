import { Duration, LocalDateTime } from "@js-joda/core";
import { Employee } from "../model/Employee";
import { Meeting } from "../model/Meeting";
import { MeetingRoom } from "../model/MeetingRoom";

export class TestData {
    private readonly identifier: string;

    constructor(identifier: string) {
        this.identifier = identifier;
    }
    
    empl1 = new Employee(1, "Jozef", "Mak", "CEO");
    e: Employee[] = [this.empl1];
    // Building 1 - Floor 1
    mrBatman = new MeetingRoom(1, "Batman", 4);
    mrNaruto = new MeetingRoom(2, "Naruto", 8);
    mrSpiderman = new MeetingRoom(3, "Spiderman", 4);
    mrItadori = new MeetingRoom(4, "Itadori", 10);

    mr: MeetingRoom[] = [this.mrBatman, this.mrNaruto, this.mrSpiderman, this.mrItadori];

    meeting1 = new Meeting(1, "Pohovor", LocalDateTime.parse("2022-11-25T08:00"), Duration.ofHours(2), this.empl1, [], this.mrItadori);
    m: Meeting[] = [this.meeting1];
}