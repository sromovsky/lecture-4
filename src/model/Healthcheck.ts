import {University} from './University';
import {Person} from './Person';

export class Healthcheck {
    private author: Person;
    private company: University;
    private identifier: string;

    constructor(author: Person, company: University, identifier: string) {
        this.author = author;
        this.company = company;
        this.identifier = identifier;
    }

    getIdentifier(): string {
        return this.identifier
    }
}