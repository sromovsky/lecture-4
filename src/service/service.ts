import {Healthcheck} from '../model/Healthcheck';
import {Person} from '../model/Person';
import {Company} from '../model/Company';
import {School} from '../model/School';
import {Address} from "../model/Address";
export class Service {
    private readonly identifier: string;

    constructor(identifier: string) {
        this.identifier = identifier;
    }

    healthcheck(): Healthcheck {
        const author = new Person('Tomáš', 'Bujdoš');
        const SchoolAddress = new Address('Dolnozemská', 1, 'Bratislava');
        const school = new School('Euba', SchoolAddress);

        return new Healthcheck(author, school, this.identifier);
    }

}