import {Address} from '../model/Address';
import {NewAddress} from '../model/NewAddress';
export class AddressService {
    private readonly adr:number =1;
    addressStorage:Address[];

    constructor() {
        this.addressStorage = [];
    }
    add(newAddress:NewAddress):
    number {
        const address = new Address(newAddress.getIdadr(),newAddress.getCity(),newAddress.getStreet(),newAddress.getNumber());
        return this.addressStorage.push(address);
    }
    getAll():Address[]{
        return this.addressStorage;
    }
    getAddr(idadr:number):Address |undefined {
      const au = this.addressStorage.find(au => au.getIdadr() === idadr);
         return (au);
    }
}
