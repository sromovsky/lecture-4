export class MeetingRoom {
    private id: number;
    private name: string;
    private capacity: number;

    constructor(id: number, name: string, capacity: number) {
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