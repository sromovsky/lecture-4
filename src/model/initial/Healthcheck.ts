import {University} from './University';
import {Person} from './Person';

export class Healthcheck {
    private author: Person;
    private university: University;
    private identifier: string;

    constructor(author: Person, university: University, identifier: string) {
        this.author = author;
        this.university = university;
        this.identifier = identifier;
    }

    getIdentifier(): string {
        return this.identifier
    }
}