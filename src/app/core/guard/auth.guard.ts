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
    if (!this.authenticationService.isUserLoggedIn()) {
      this.router.navigateByUrl('/auth/login');
    }
    return true;
  }
}
