import {Healthcheck} from '../model/Healthcheck';
import {Person} from '../model/Person';
import {Company} from '../model/Company';
import {Address} from '../model/Address';

export class Service {
    private readonly identifier: string;

    constructor(identifier: string) {
        this.identifier = identifier;
    }

    healthcheck(): Healthcheck {
        const author = new Person('Tomáš', 'Šromovský');
        const companyAddress = new Address('Bajkalská', 28, 'Bratislava');
        const company = new Company('PosAm, spol. s r.o.', companyAddress);

        return new Healthcheck(author, company, this.identifier);
    }
}