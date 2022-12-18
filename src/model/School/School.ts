import {Address} from './Address';
import {Faculty} from './Faculty';

export class School {
    private name: string;
    private address: Address;
    private faculty: Faculty;

    constructor(name: string, address: Address, faculty: Faculty) {
        this.name = name;
        this.address = address;
        this.faculty = faculty;
    }
}