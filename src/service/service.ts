import {Healthcheck} from '../model/Healthcheck';
import {Person} from '../model/Person';
import {University} from '../model/University';
import {Address} from '../model/Address';

export class Service {
    private readonly identifier: string;

    constructor(identifier: string) {
        this.identifier = identifier;
    }

    healthcheck(): Healthcheck {
        const author = new Person('Alex', 'Németh');
        const companyAddress = new Address('Dolnozemská', 1, 'Bratislava');
        const company = new University('Ekonomická univerzita', companyAddress);

        return new Healthcheck(author, company, this.identifier);
    }
}