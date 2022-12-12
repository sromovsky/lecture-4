import {Request, Response} from 'express';
import {Service} from './service/service';
import {SERVER_PORT} from './const/api.const';
import {TimeService} from './service/time.service';
import {LocalTime} from '@js-joda/core';
import {NewKino} from './model/NewKino';
import {NewAddress} from './model/NewAddress';
import {TimeInterval} from './model/TimeInterval';
import {NewKinoFilm} from './model/NewKinoFilm';
import {NewFilm} from './model/NewFilm';
import {KinoFilmService} from './service/kinofilm.service';
import {KinoService} from './service/kino.service';
import {FilmService} from './service/film.service';
import {AddressService} from './service/address.service';
import {SHOW_TIME_FROM, SHOW_TIME_TO, FILM_TIME_MINUTES} from './const/time.cont';
const express = require('express');
const service = new Service('1.0.0');
const timeService = new TimeService();
const kinofilmService = new KinoFilmService();
const kinoService = new KinoService();
const filmService = new FilmService();
const addressService = new AddressService();
const app = express();
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.send(service.healthcheck());
});
app.get('/today', (req: Request, res: Response) => {
    res.send(timeService.today());
});
app.get('/working-time', (req: Request, res: Response) => {
    res.send(timeService.workingTime());
});
app.get('/kinofilms', (req: Request, res: Response) => {
    res.send(kinofilmService.getAll());
});
app.get('/kinos', (req: Request, res: Response) => {
    res.send(kinoService.getAll());
});

app.get('/adresy', (req: Request, res: Response) => {
  res.send(addressService.getAll());
});
app.get('/adresyid/', (req: Request, res: Response) => {
    res.send(addressService.getAddr(Number(req.query.idadr)));
});

app.get('/kinofilm', (req: Request, res: Response) => {
    res.send(kinofilmService.getAll());
});
app.get('/filmy', (req: Request, res: Response) => {
    res.send(filmService.getAll());
});

app.post('/kinos', (req: Request, res: Response) => {
    const idadr = Number(req.query?.idadr?.toString());
    const adres = addressService.getAddr(idadr);
    const newKino = new NewKino(Number(req.query?.iden?.toString()),req.query?.name?.toString(),adres);
    kinoService.add(newKino);
    res.send({});
});
app.post('/kinofilmadd', (req: Request, res: Response) => {
    const iden = Number(req.query?.iden?.toString());
    const cisf = Number(req.query?.cisf?.toString());
    const cas1 = Number(req.query?.cas1?.toString());
    const cas2 = Number(req.query?.cas2?.toString());
    const from1 = LocalTime.of(cas1);
    const to1 = from1.plusMinutes(FILM_TIME_MINUTES);
    const interval1 = new TimeInterval(from1, to1);
    const film = filmService.getFilm(cisf);
    const kino = kinoService.getKino(iden);
    if ((kino == undefined)||(film == undefined))
        {
        res.send('nenasiel sa film alebo kino');
        }
        else
        {
         const from2 = LocalTime.of(cas2);
            const to2 = from2.plusMinutes(FILM_TIME_MINUTES);
            const interval2 = new TimeInterval(from2, to2);
            const newKinoFilm = new NewKinoFilm(kino, film, iden, cisf, interval1, interval2);
            kinofilmService.add(newKinoFilm);
            res.send({});
          }
});
app.post('/kinosadr', (req: Request, res: Response) => {
    const idadr = Number(req.query?.idadr?.toString());
    const adres = addressService.getAddr(idadr);
    const newKino = new NewKino(Number(req.query?.iden?.toString()),req.query?.name?.toString(),adres);
    kinoService.add(newKino);
    res.send({});
});
app.post('/adresy', (req: Request, res: Response) => {
    const newAddress = new NewAddress(Number(req.query?.idadr?.toString()),req.query?.city?.toString(),
    req.query?.street?.toString(),Number(req.query?.number?.toString()));
    addressService.add(newAddress);
    res.send({});
});
app.post('/filmy', (req: Request, res: Response) => {
    const newFilm = new NewFilm(Number(req.query?.cisf?.toString()),req.query?.name?.toString(),
    req.query?.stat?.toString(),Number(req.query?.rok?.toString()),req.query?.jazyk?.toString());
    filmService.add(newFilm);
    res.send({});
});
// Start server:
app.listen(SERVER_PORT, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${SERVER_PORT}`)
});