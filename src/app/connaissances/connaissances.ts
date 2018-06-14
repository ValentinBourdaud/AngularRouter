export default class Connaissance {
    private _nom: string;
  

    constructor(nom: string) {
        this._nom = nom;
    }

    get nom(): string {
        return this._nom;
    }

}