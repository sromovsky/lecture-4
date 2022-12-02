import { Healthcheck } from '../model/initial/Healthcheck';
import { Person } from '../model/initial/Person';
import { University } from '../model/initial/University';
import { Address } from '../model/initial/Address';

export class Service {
    private readonly identifier: string;

    constructor(identifier: string) {
        this.identifier = identifier;
    }

    healthcheck(): Healthcheck {
        const author = new Person('David', 'Birošík');
        const companyAddress = new Address('Dolnozemská Cesta', 1, 'Bratislava');
        const company = new University('Ekonomická Univerzita v Bratislave', companyAddress);

        return new Healthcheck(author, company, this.identifier);
    }

}