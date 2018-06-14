export default class Formation {
    private _nom: string;
    private _description: string;
  

    constructor(nom: string, description: string, ) {
        this._nom = nom;
        this._description = description;
    }

    get nom(): string {
        return this._nom;
    }

    get description(): string {
        return this._description;
    }

}