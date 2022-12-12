import {Film} from '../model/Film';
import {NewFilm} from '../model/NewFilm';

export class FilmService {
    private readonly fili:number =1;
    filmStorage:Film[];

    constructor() {
        this.filmStorage = [];
    }
    add(newFilm:NewFilm):
    number {
        const film = new Film(newFilm.getCisf(),newFilm.getName() , newFilm.getStat(),
                    newFilm.getRok(),newFilm.getJazyk());
        return this.filmStorage.push(film);
    }
    getAll():Film[]{
        return this.filmStorage;
    }
    getFilm(cisf:number):Film |undefined {
        const fi = this.filmStorage.find(fi=> fi.getCisf() === cisf);
        return(fi);
    }
}
