export class NewMeeting {
    private name: string;
    private start: number;

    constructor(name: string | undefined, start: number | undefined) {
        this.name = name ? name : 'Meeting';
        this.start = start ? start : 8;
    }



    getStart(): number {
        return this.start;
    }

    getName() {
        return this.name;
    }
}