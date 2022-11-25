import { Floor } from "./Floor";

export class Building {
    private id: Number;
    private name: String;
    private address: String;
    private city: String;
    private country: String;
    private floors: Floor[];
    constructor(id: Number, name: String, address: String, city: String, country: String, floors: Floor[]) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.country = country;
        this.floors = floors;
    }

    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    getCity() {
        return this.city;
    }
    getCountry() {
        return this.country;
    }
    getFloors() {
        return this.floors;
    }
    
}