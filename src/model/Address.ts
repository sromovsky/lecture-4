export class Address {
    private idadr : number;
    private city: string;
    private street: string;
    private number: number;

    constructor(idadr: number,city: string,street: string, number: number ) {
        this.idadr = idadr;
        this.city = city;
        this.street = street;
        this.number = number;

    }
    getIdadr(): number {
        return this.idadr;
    }
}
