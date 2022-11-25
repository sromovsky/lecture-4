export class Address {
    street: string;
    city: string;
    number: number;

    constructor(street: string, number: number, city: string) {
        this.street = street;
        this.number = number;
        this.city = city;
    }
}