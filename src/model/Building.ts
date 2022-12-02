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
    getFloor(id: number) {
        var floor: Floor[] = this.floors.filter(floor => floor.getId() == id);
        return floor[0];
    }
    getPritableBuilding() {
        let building = {
            "id": this.id,
            "name": this.name,
            "address": this.address,
            "city": this.city,
            "country": this.city,
            "floors": this.floors.length
        }
        return building;
    }
    
}