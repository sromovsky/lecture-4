import {AddressService} from './address.service';
import {Address} from '../model/Address';
import {NewAddress} from '../model/NewAddress';
import {describe, expect, test, beforeEach} from '@jest/globals';
        describe('AddressService', () => {

        let addressService: AddressService;

        beforeEach(() => {
        addressService = new AddressService();
        });
        test('GetAll', () => {
        const newAddress = new NewAddress(1,'Bratislava','Dolnozemska',1)
        const num = addressService.add(newAddress);
        const adrstor = addressService.getAll();
        const pocadr = adrstor.length;
        const poradr = addressService.addressStorage.length;
        expect(pocadr).toBe(poradr);
        });
        test('add', () => {
        const newAddress = new NewAddress(1,'Bratislava','Dolnozemska',1) ;
        const num = addressService.add(newAddress);
        expect(num).toBe(1);
        });
        test('getAddr', () => {
        const newAddress = new NewAddress(1,'Bratislava','Dolnozemska',1) ;
        const address = addressService.add(newAddress);
        const ad = addressService.getAddr(1);
        if (ad) {
        //const ad1 = new Address(ad.idadr,ad.city,ad.street,ad.number);
        const expectedObject = {
        idadr: 1,
        city: 'Bratislava',
        street : 'Dolnozemska',
        number : 1
        };
        expect(ad).toEqual(expectedObject);
        };
        });
        });