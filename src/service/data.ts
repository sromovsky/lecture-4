import { Duration, LocalDateTime } from "@js-joda/core";
import { Employee } from "../model/Employee";
import { Meeting } from "../model/Meeting";
import { MeetingRoom } from "../model/MeetingRoom";

export class Data {
    private readonly identifier: string;

    constructor(identifier: string) {
        this.identifier = identifier;
    }

    empl1 = new Employee(1, "Jozef", "Mak", "CEO");
    empl2 = new Employee(2, "Stano", "Vysoký", "CEE");
    empl3 = new Employee(3, "Martina", "Stručná", "Developer");
    empl4 = new Employee(4, "Simon", "Starý", "Developer");
    empl5 = new Employee(5, "Michal", "Šifra", "Head of Development");
    e: Employee[] = [this.empl1, this.empl2, this.empl3, this.empl4, this.empl5];

    mrBatman = new MeetingRoom(1, "Batman", 4);
    mrNaruto = new MeetingRoom(2, "Naruto", 8);
    mrSpiderman = new MeetingRoom(3, "Spiderman", 4);
    mrItadori = new MeetingRoom(4, "Itadori", 10);

    mr: MeetingRoom[] = [this.mrBatman, this.mrNaruto, this.mrSpiderman, this.mrItadori];


    meeting1 = new Meeting(1, "Pohovor", LocalDateTime.parse("2022-11-25T08:00"), Duration.ofMinutes(30), this.empl5, [], this.mrItadori);
    meeting2 = new Meeting(2, "Monthly Meeting", LocalDateTime.parse("2022-11-25T09:00"), Duration.ofHours(2), this.empl2, [this.empl3, this.empl4], this.mrBatman);
    m: Meeting[] = [this.meeting1, this.meeting2];

}