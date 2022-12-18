export class Faculty {
    private facultyName: string;
    private programme: string;
    private studyYear: number;

    constructor(facultyName: string,programme: string , studyYear: number) {
        this.facultyName = facultyName;
        this.programme = programme;
        this.studyYear = studyYear;
    }
}