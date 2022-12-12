export class NewFilm {
    private cisf : number;
    private name: string;
    private stat : string;
    private rok : number;
    private jazyk: string

    constructor(cisf:number| undefined,name: string| undefined,stat: string| undefined,
                rok:number| undefined, jazyk: string| undefined) {
        this.cisf = cisf? cisf : 99;
        this.name= name? name: 'nenaslo';
        this.stat = stat? stat: 'Bangladez';
        this.rok = rok? rok : 2999;
        this.jazyk = jazyk? jazyk : ' swah';
    }
    getCisf(): number {
        return this.cisf;
    }
    getName(): string {
        return this.name;
    }
    getStat(): string {
        return this.stat;
    }
    getRok(): number {
        return this.rok;
    }
    getJazyk(): string {
        return this.jazyk;
    }
}