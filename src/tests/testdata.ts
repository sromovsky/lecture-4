import { Duration, LocalDateTime } from "@js-joda/core";
import { Building } from "../model/Building";
import { Employee } from "../model/Employee";
import { Floor } from "../model/Floor";
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
    b1f1mr1 = new MeetingRoom(1, "Batman", 4);
    b1f1mr2 = new MeetingRoom(2, "Naruto", 8);
    b1f1 = new Floor(1, 2, [this.b1f1mr1, this.b1f1mr2]);
    // Building 1 - Floor 2
    b1f2mr1 = new MeetingRoom(3, "Spiderman", 4);
    b1f2mr2 = new MeetingRoom(4, "Itadori", 10);
    b1f2 = new Floor(2, 3, [this.b1f2mr1, this.b1f2mr2]);
    // Building 1
    b1 = new Building(1, "CBC 3", "Karadžičová 14", "Bratislava", "Slovakia", [this.b1f1, this.b1f2]);
    b: Building[] = [this.b1];

    meeting1 = new Meeting(1, "Pohovor", LocalDateTime.parse("2022-11-25T08:00"), Duration.ofHours(2), this.empl1, [], this.b1f1mr1);
}