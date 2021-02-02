import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Subscription} from "rxjs";
import {AuthenticationService} from "../../../../core/services/auth/authentication.service";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "../../../../model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public showLoading: boolean;

  private subscriptions: Subscription[] = [];

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigateByUrl('');
    }
  }

  public onRegister(user: User): void {
    this.showLoading = true;
    this.subscriptions.push(
      this.authenticationService.register(user).subscribe(
        (response: User) => {
          this.showLoading = false;
          this.router.navigateByUrl('');
        },
        (errorResponse: HttpErrorResponse) => {
          errorResponse.error.message;
          this.showLoading = false;
        }
      ));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
