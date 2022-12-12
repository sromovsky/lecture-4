import {School} from './School';
import {Person} from './Person';

export class Healthcheck {
    private author: Person;
    private school: School;
    private identifier: string;

    constructor(author: Person, school: School, identifier: string) {
        this.author = author;
        this.school = school;
        this.identifier = identifier;
    }

    getIdentifier(): string {
        return this.identifier
    }
}