import {Address} from './Address';

export class Kino {
    private iden : number;
     private name: string;
     private address: Address;
     constructor(iden :number,name: string, address: Address| undefined) {
        this.iden = iden;
        this.name = name;
        this.address = address? address: new Address(97,'docasnaz','Docasnaz', 1);;
     }
    getIden(): number {
        return this.iden;
    }
}