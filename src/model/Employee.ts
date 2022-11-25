export class Employee {
    private id: Number;
    private firstName: string;
    private lastName: string;
    private position: string;

    constructor(id: Number, firstName: string, lastName: string, position: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }
    getId() {
        return this.id;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getPosition() {
        return this.position;
    }
}