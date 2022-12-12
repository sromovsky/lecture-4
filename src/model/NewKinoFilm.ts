import {Kino} from './Kino';
import {Film} from './Film';
import {TimeInterval} from './TimeInterval';
import {LocalTime} from '@js-joda/core';
import {Address} from './Address';
const adrn =new Address(98,'docasna','Docasna', 1);
export class NewKinoFilm {
   private  kino: Kino;
   private film: Film;
   private  iden: number;
   private cisf: number;
   private interval1: TimeInterval;
   private interval2: TimeInterval;
    constructor(kino: Kino| undefined, film: Film| undefined, iden: number| undefined,cisf: number| undefined,interval1: TimeInterval| undefined,interval2: TimeInterval| undefined)
    {
        this.kino = kino? kino : new Kino(98,'nenaslo',adrn) ;
        this.film = film? film : new Film(99,'nenaslo','nen',999,'nen');
        this.iden = iden? iden : 99;
        this.cisf = cisf? cisf : 99;
        this.interval1 = interval1? interval1: new TimeInterval(LocalTime.of(1),LocalTime.of(1));
        this.interval2 = interval2? interval2: new TimeInterval(LocalTime.of(1),LocalTime.of(1));
    }
    getKino() : Kino{
        return this.kino;
    }
    getFilm() : Film{
        return this.film;
    }
    getIden(): number {
        return this.iden;
    }
    getCisf(): number {
        return this.cisf;
    }
    getInterval1(): TimeInterval {
        return this.interval1;
    }
    getInterval2(): TimeInterval {
        return this.interval2;
    }
}