import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import Formation from "./formations";

@Injectable()
export class FormationsResolvers implements Resolve<any> {
    
    constructor() {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                'Module Angular',
                'Module JavaScript',
                'Module TypeScript'
            ]);
        }, 5000);
    })
}
}

