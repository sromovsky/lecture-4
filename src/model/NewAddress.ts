export class NewAddress {
    private idadr : number;
    private city: string;
    private street: string;
    private number: number;

    constructor(idadr:number | undefined,city: string | undefined,street: string | undefined, number:number | undefined) {
        this.idadr = idadr ? idadr : 99;
        this.city = city ? city : 'Nenaslo';
        this.street = street ? street : 'Neznama';
        this.number = number ? number : 1;
    }
    getIdadr(): number {
         return this.idadr;
        }
        getCity(): string {
        return this.city;
        }
        getStreet(): string {
        return this.street;
        }
        getNumber(): number {
        return this.number;
        }
}