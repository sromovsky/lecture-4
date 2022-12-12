import {KinoFilmService} from './kinofilm.service';
import {KinoFilm} from '../model/KinoFilm';
import {NewKinoFilm} from '../model/NewKinoFilm';
import {Kino} from '../model/Kino';
import {Film} from '../model/Film';
import {Address} from '../model/Address';
import {LocalTime} from '@js-joda/core';
import {SHOW_TIME_FROM, SHOW_TIME_TO} from '../const/time.cont';
import {TimeInterval} from '../model/TimeInterval';
import {describe, expect, test, beforeEach} from '@jest/globals';
        describe('KinofilmService', () => {

        let kinofilmService: KinoFilmService;

        beforeEach(() => {
        kinofilmService = new KinoFilmService();
        });

        test('add', () => {
        const addr = new Address(1,'Bratislava','Dolnozemska',1) ;
        const kino = new Kino(1,'Cinema',addr) ;
        const film = new Film(1,'Popoluska','CZK',1978,'cesky') ;
        const iden1 = 1;
        const cisf1 = 1;
        const interval1 = new TimeInterval(LocalTime.of(17),LocalTime.of(19));
        const interval2 = new TimeInterval(LocalTime.of(19),LocalTime.of(21));
        const kinofilm = new NewKinoFilm(kino,film,iden1,cisf1,interval1,interval2);
        const num = kinofilmService.add(kinofilm);
         expect(num).toBe(1);
        });
        test('GetAll', () => {
        const addr = new Address(1,'Bratislava','Dolnozemska',1) ;
        const kino = new Kino(1,'Cinema',addr) ;
        const film = new Film(1,'Popoluska','CZK',1978,'cesky') ;
        const iden1 = 1;
        const cisf1 = 1;
        const interval1 = new TimeInterval(LocalTime.of(17),LocalTime.of(19));
        const interval2 = new TimeInterval(LocalTime.of(19),LocalTime.of(21));
        const kinofilm = new NewKinoFilm(kino,film,iden1,cisf1,interval1,interval2);
        const num = kinofilmService.add(kinofilm);
        const kfstor = kinofilmService.getAll();
        const pockf = kfstor.length;
        const porkf = kinofilmService.kinofilmStorage.length;
        expect(pockf).toBe(porkf);
        });

        });