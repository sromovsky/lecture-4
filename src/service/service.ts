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
        const author = new Person('Matej', 'Koszorú');
        const schoolAddress = new Address('Bajkalská', 28, 'Bratislava');
        const school = new School('PosAm, spol. s r.o.', schoolAddress);

        return new Healthcheck(author, school, this.identifier);
    }
}