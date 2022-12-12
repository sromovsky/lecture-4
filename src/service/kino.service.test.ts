import {KinoService} from './kino.service';
import {Kino} from '../model/Kino';
import {NewKino} from '../model/NewKino';
import {Address} from '../model/Address';
import {describe, expect, test, beforeEach} from '@jest/globals';
        describe('KinoService', () => {

        let kinoService: KinoService;

        beforeEach(() => {
        kinoService = new KinoService();
        });

        test('add', () => {
        const addr = new Address(1,'Bratislava','Dolnozemska',1) ;
        const newKino = new NewKino(1,'Cinema',addr) ;
        const num = kinoService.add(newKino);
        expect(num).toBe(1);
        });
        test('GetAll', () => {
        const addr = new Address(1,'Bratislava','Dolnozemska',1) ;
        const newKino = new NewKino(1,'Cinema',addr) ;
        const num = kinoService.add(newKino);

        const kinostor = kinoService.getAll();
        const pockino = kinostor.length;
        const porkino = kinoService.kinoStorage.length;
        expect(pockino).toBe(porkino);
        });
        test('getKino(iden)', () => {
           const addr = new Address(1,'Bratislava','Dolnozemska',1) ;
           const newKino = new NewKino(1,'Cinema',addr) ;
           const kino = kinoService.add(newKino);
           const iden = 1;
           const ki = kinoService.getKino(iden);
           if (ki) {
             const expectedObject = {
             iden: 1,
             name: 'Cinema',
             address : addr
             };
             expect(ki).toEqual(expectedObject);
           };
        });
   })