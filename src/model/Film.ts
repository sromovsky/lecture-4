export class Film {
    private cisf : number;
    private name: string;
    private stat : string;
    private rok : number;
    private  jazyk: string;

    constructor(cisf:number,name: string,stat: string,rok:number, jazyk: string) {
        this.cisf = cisf;
        this.name= name;
        this.stat = stat;
		this.rok = rok;
        this.jazyk = jazyk;
    }

    getCisf(): number {
        return this.cisf;
        }
}