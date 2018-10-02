import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AccidentService} from "./accident.service";

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private accidentService: AccidentService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.accidentService.isValid()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
