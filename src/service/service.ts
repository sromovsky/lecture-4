import {MainInfo} from '../model/MainInfo';
import {Person} from '../model/Person';
import {Company} from '../model/Company';
import {Address} from '../model/Address';

export class Service {
    private readonly identifier: string;

    constructor(identifier: string) {
        this.identifier = identifier;
    }

    maininfo(): MainInfo {
        const author = new Person('Michal', 'Zvalo');
        const companyAddress = new Address('Dolnozemská cesta', 1, 'Bratislava');
        const company = new Company('University of Economics in Bratislava', companyAddress);

        return new MainInfo(author, company, this.identifier);
    }
}