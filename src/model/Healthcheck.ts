import {School} from './School';
import {Person} from './Person';

export class Healthcheck {
    private author: Person;
    private company: School;
    private identifier: string;

    constructor(author: Person, company: School, identifier: string) {
        this.author = author;
        this.company = company;
        this.identifier = identifier;
    }

    getIdentifier(): string {
        return this.identifier
    }
}