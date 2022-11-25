import { Floor } from "./Floor";

export class MeetingRoom {
    private id: Number;
    private name: String;
    private capacity: Number;

    constructor(id: Number, name: String, capacity: Number) {
        this.id = id;
        this.name = name;
        this.capacity = capacity;
    } 

    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getCapacity() {
        return this.capacity;
    }

}