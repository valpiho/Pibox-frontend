import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Subscription} from "rxjs";
import {AuthenticationService} from "../../../../core/services/auth/authentication.service";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "../../../../model/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigateByUrl('');
    }
  }

  public onRegister(user: User): void {
    this.subscriptions.push(
      this.authenticationService.register(user).subscribe(
        (response: User) => {}
      ));
    this.router.navigateByUrl('');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
