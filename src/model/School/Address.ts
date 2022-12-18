export class Address {
    street: string;
    cityDistrict: string;
    PSC: string;
    number: number;
    city: string;

    constructor(street: string, number: number, cityDistrict: string, PSC: string, city: string) {
        this.street = street;
        this.number = number;
        this.cityDistrict = cityDistrict;
        this.PSC = PSC;
        this.city = city;
    }
}