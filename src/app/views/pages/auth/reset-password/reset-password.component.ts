import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {CustomHttpResponse} from '../../../../model/custom-http-response';
import {AuthenticationService} from '../../../../core/services/auth/authentication.service';

@Component({
  selector: 'app-restore-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  public showLoading: boolean;
  private subscriptions: Subscription[] = [];

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onRestore(emailForm: NgForm): void {
    this.showLoading = true;
    const emailAddress = emailForm.value.email;
    this.subscriptions.push(
      this.authenticationService.resetPassword(emailAddress).subscribe(
        (response: CustomHttpResponse) => {
          this.showLoading = false;
          this.router.navigateByUrl('');
        },
        (errorResponse: HttpErrorResponse) => {
          errorResponse.error.message;
          this.showLoading = false;
        },
        () => emailForm.reset()
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
