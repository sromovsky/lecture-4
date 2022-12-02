export class NewMeeting {
    private name: string;
    private start: number;

    constructor(name: string | undefined, start: number | undefined) {
        this.name = name ? name : 'Meeting';
        this.start = start ? start : 8;
    }

    getName(): string {
        return this.name;
    }

    getStart(): number {
        return this.start;
    }
}