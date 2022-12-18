import {Healthcheck} from '../model/Healthcheck';
import {School} from '../model/School';
import {Address} from '../model/Address';
import {Person} from "../model/Person";

export class Service {
    private readonly identifier: string;

    constructor(identifier: string) {
        this.identifier = identifier;
    }

    healthcheck(): Healthcheck {
        const author = new Person('Samuel', 'Čuboň');
        const schoolAddress = new Address('Dolnozemská cesta', 1, ' Petržalka', '852 35', 'Bratislava');
        const school = new School('Ekonomická Univerzita v Bratislave', schoolAddress);

        return new Healthcheck(author, school, this.identifier);
    }
}