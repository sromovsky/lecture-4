import {FilmService} from './film.service';
import {Film} from '../model/Film';
import {NewFilm} from '../model/NewFilm';
import {describe, expect, test, beforeEach} from '@jest/globals';
describe('FilmService', () => {

        let filmService: FilmService;

        beforeEach(() => {
            filmService = new FilmService();
        });
        test('Film', () => {
            const film = new Film(2,'Popoluska','CZK',1978,'cesky') ;
            const expectedObject = {
                   cisf: 2,
                   name: 'Popoluska',
                   stat : 'CZK',
                   rok : 1978,
                   jazyk: 'cesky'
             };
            expect(film).toEqual(expectedObject);
        });

        test('add', () => {
             const newFilm = new NewFilm(2,'Popoluska','CZK',1978,'cesky') ;
             const num = filmService.add(newFilm);
             expect(num).toBe(1);
        });
        test('GetAll', () => {
            const newFilm = new NewFilm(2,'Popoluska','CZK',1978,'cesky') ;
          const num = filmService.add(newFilm);
          const filmstor = filmService.getAll();
          const pocfilm = filmstor.length;
          const porfilm = filmService.filmStorage.length;
          expect(pocfilm).toBe(porfilm);
        });
        test('getFilm', () => {
              const newFilm = new NewFilm(2,'Popoluska','CZK',1978,'cesky') ;
              const film = filmService.add(newFilm);
              const fi = filmService.getFilm(2);
              if (fi) {
                  const expectedObject = {
                       cisf: 2,
                       name: 'Popoluska',
                       stat : 'CZK',
                       rok : 1978,
                       jazyk: 'cesky'
                  };
                  expect(fi).toEqual(expectedObject);
              };
        });
});