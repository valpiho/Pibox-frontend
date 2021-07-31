import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../core/services/auth/authentication.service';
import {User} from '../../../../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public user: User;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.user = this.authenticationService.getUserFromLocalCache();
    console.log(this.user)
  }

}
