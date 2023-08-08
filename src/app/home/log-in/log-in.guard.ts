import { Injectable } from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LogInService} from "./log-in.service";

@Injectable({
  providedIn: 'root'
})
export class LogInGuard implements CanLoad {

  constructor(private logInService: LogInService, private router: Router) {
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.logInService.isLogedIn) {
      this.router.navigateByUrl("/home/log-in");
    }

    return this.logInService.isLogedIn;
  }
}
