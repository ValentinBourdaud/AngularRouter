import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeAccessGuard implements CanActivate {

  access : boolean;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve) => {
      setInterval(() => {
          resolve(access == false);
          console.log("accès : ", access, new Date())
      }, 10000);
      return true;
  });
  }
}
