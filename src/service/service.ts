import {Healthcheck} from '../model/Healthcheck';
import {Person} from '../model/Person';
import {School} from '../model/School';
import {Address} from '../model/Address';

export class Service {
    private readonly identifier: string;

    constructor(identifier: string) {
        this.identifier = identifier;
    }

    healthcheck(): Healthcheck {
        const author = new Person('Patrik', 'Sýkora');
        const schoolAddress = new Address('Dolnozemská', 28, 'Bratislava');
        const school = new School('Euba', schoolAddress);

        return new Healthcheck(author, school, this.identifier);
    }
    test(): any{
        return { test:"OK"}
    }
}