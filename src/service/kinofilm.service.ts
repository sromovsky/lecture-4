import {KinoFilm} from '../model/KinoFilm';
import {NewKinoFilm} from '../model/NewKinoFilm';
import {Kino} from '../model/Kino';
import {Film} from '../model/Film';
import {Address} from '../model/Address';
import {LocalTime} from '@js-joda/core';
import {TimeInterval} from '../model/TimeInterval';

export class KinoFilmService {
    private readonly kina:number =1;
    kinofilmStorage:KinoFilm[];

    constructor() {
        this.kinofilmStorage = [];
    }

    getAll():KinoFilm[]
    {
        return this.kinofilmStorage;
    }
    add(newKinoFilm:NewKinoFilm):number {
        const kinoFilm = new KinoFilm(newKinoFilm.getKino(), newKinoFilm.getFilm(),
                newKinoFilm.getIden(), newKinoFilm.getCisf(), newKinoFilm.getInterval1(),
                newKinoFilm.getInterval2());
        return this.kinofilmStorage.push(kinoFilm);
    }

}


