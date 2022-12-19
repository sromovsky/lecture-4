import {YearOfStudy} from "./YearOfStudy";


export class Position {
    private name: string;
    private yearOfStudy: YearOfStudy;

    constructor(name: string, yearOfStudy: YearOfStudy) {
        this.name = name;
        this.yearOfStudy = yearOfStudy;
    }
}