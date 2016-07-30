export class Secret {
    public keys: string[];
    public name: string;
    public current: number = 0;


    constructor(name:string, keys:string[]) {
        this.keys = keys;
        this.name = name;
    }
}