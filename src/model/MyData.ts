import {Person} from "./Person";
import {Position} from "./Position";

export class MyData {
    private author: Person;
    private position: Position;
    private verification: string;

    constructor(author: Person, position: Position, verification: string) {
        this.author = author;
        this.position = position;
        this.verification = verification;
    }

    getVerification(): string {
        return this.verification
    }
}