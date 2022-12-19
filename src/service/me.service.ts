import {Person} from "../model/Person";
import {Position} from "../model/Position";
import {MyData} from "../model/MyData";
import {YearOfStudy} from "../model/YearOfStudy";

export class MeService {
    private readonly verification: string;

    constructor(verification: string) {
        this.verification = verification;
    }

    myData(): MyData {
        const author = new Person('Viktor', 'Halasz');
        const yearOfStudy = new YearOfStudy('Ekonomická Univerzita v Bratislave', 'Bc.', 3);
        const myPosition = new Position('student', yearOfStudy);

        return new MyData(author, myPosition, this.verification);
    }
}