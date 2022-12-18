import {Healthcheck} from '../model/School/Healthcheck';
import {Person} from '../model/School/Person';
import {School} from '../model/School/School';
import {Address} from '../model/School/Address';
import {Faculty} from "../model/School/Faculty";

export class Service {
    private readonly identifier: string;

    constructor(identifier: string) {
        this.identifier = identifier;
    }

    healthcheck(): Healthcheck {
        const author = new Person('Matej', 'Koszorú');
        const schoolAddress = new Address('Dolnozemská', 1, 'Bratislava');
        const faculty = new Faculty('Fakulta Hospodárskej Informatiky','Hospodárska Informatika' ,3)
        const school = new School('Ekonomická Univerzita v Bratislave', schoolAddress, faculty);

        return new Healthcheck(author, school, this.identifier);
    }
}