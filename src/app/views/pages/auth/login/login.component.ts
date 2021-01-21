import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../../../core/services/auth/authentication.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {User} from "../../../../model/User";
import {HeaderType} from "../../../../core/enumeration/header-type.enum";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigateByUrl('');
    }
  }

  public onLogin(user: User): void {
    this.subscriptions.push(
      this.authenticationService.login(user).subscribe(
        (response: HttpResponse<User>) => {
          const token = response.headers.get(HeaderType.JWT_TOKEN);
          this.authenticationService.saveToken(token);
          this.authenticationService.addUserToLocalCache(response.body);
          this.router.navigateByUrl('/user/management');
        },
        (errorResponse: HttpErrorResponse) => {
          errorResponse.error.message;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
