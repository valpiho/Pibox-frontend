import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import {AuthenticationService} from "../services/auth/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private authenticationService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isUserLoggedIn();
  }

  private isUserLoggedIn() {
    if (this.authenticationService.isUserLoggedIn()) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/auth/login']);
    return false;
  }
}
