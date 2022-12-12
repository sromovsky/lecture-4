import {Kino} from '../model/Kino';
import {NewKino} from '../model/NewKino';
import {Address} from '../model/Address';
export class KinoService {
    private readonly kin:number =1;
    kinoStorage:Kino[];

    constructor() {
        this.kinoStorage = [];
    }

    add(newKino:NewKino):number {
        const kino = new Kino(newKino.getIden(),newKino.getName(),newKino.getAddress());
        return this.kinoStorage.push(kino);
    }

    getAll():Kino[]

    {
        return this.kinoStorage;
    }
    getKino(iden:number):Kino |undefined {
        const ki = this.kinoStorage.find(ki=> ki.getIden() === iden);
        return (ki);
     }
}
