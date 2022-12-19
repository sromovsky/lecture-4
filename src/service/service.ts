import {Healthcheck} from '../model/Healthcheck';
import {Person} from '../model/Person';
import {Address} from '../model/Address';
import { School } from '../model/School';

export class Service {
    private readonly identifier: string;

    constructor(identifier: string) {
        this.identifier = identifier;
    }

    healthcheck(): Healthcheck {
        const author = new Person('Mário', 'Kluvanec');
        const schoolAddress = new Address('Dolnozemská', 1, 'Bratislava');
        const school = new School('EUBA', schoolAddress);

        return new Healthcheck(author, school, this.identifier);
    }
}