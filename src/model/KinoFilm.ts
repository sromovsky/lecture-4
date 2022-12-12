import {Kino} from './Kino';
import {Film} from './Film';
import {Address} from './Address';
import {LocalTime} from '@js-joda/core';
import {TimeInterval} from './TimeInterval';
export class KinoFilm {
    private kino:Kino;
    private film:Film;
    private iden:number;
    private cisf:number;
    private interval1:TimeInterval;
    private interval2:TimeInterval;

    constructor(kino:Kino, film:Film, iden:number, cisf:number, interval1:TimeInterval|undefined
            , interval2:TimeInterval|undefined) {
        this.kino = kino;
        this.film = film;
        this.iden = iden;
        this.cisf = cisf;
        this.interval1 = interval1 ? interval1 : new TimeInterval(LocalTime.of(1), LocalTime.of(1));
        this.interval2 = interval2 ? interval2 : new TimeInterval(LocalTime.of(1), LocalTime.of(1));
    }

};