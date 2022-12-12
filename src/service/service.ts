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
        const author = new Person('Jakub', 'Mačuha');
        const companyAddress = new Address(0,'Bratislava','Dolnozemská cesta', 1);
        const school = new School('FHI-EUBA', companyAddress);

        return new Healthcheck(author, school, this.identifier);
    }
}