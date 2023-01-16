import {Company} from './Company';
import {Person} from './Person';

export class Healthcheck {
    private author: Person;
    private company: Company;
    private identifier: string;

    constructor(author: Person, company: Company, identifier: string) {
        this.author = author;
        this.company = company;
        this.identifier = identifier;
    }

    getIdentifier(): string {
        return this.identifier
    }
}