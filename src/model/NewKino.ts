import {Address} from './Address';

   export class NewKino {
    private iden : number;
    private name: string;
    private address: Address;


    constructor(iden :number| undefined,name: string| undefined ,address:Address| undefined) {
        this.iden = iden? iden : 499;
        this.name = name? name : 'nenaslo';
       this.address = address? address: new Address(98,'docasna','Docasna', 1);

    }
    getIden(): number {
        return this.iden;
    }
    getName(): string {
        return this.name;
    }
    getAddress(): Address {
        return this.address;
    }
}