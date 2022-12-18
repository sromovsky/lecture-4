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
        const author = new Person('Filip', 'Škrabko');
        const schoolAddress = new Address('Dolnozemská cesta', 1,'Bratislava');
        const company = new School('Ekonomická Univerzita v Bratislave', schoolAddress);

        return new Healthcheck(author, company, this.identifier);
    }
}