import {Component, OnDestroy, OnInit} from '@angular/core';
import {Group} from '../../../../model/group';
import {GroupService} from '../../../../core/services/group.service';
import {Subscription} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../../../../model/user';
import {AuthenticationService} from '../../../../core/services/auth/authentication.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html'
})
export class GroupListComponent implements OnInit, OnDestroy{

  public user: User;
  public groups: Group[];

  private subscriptions: Subscription[] = [];

  constructor(private groupService: GroupService,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.user = this.authenticationService.getUserFromLocalCache();
    this.subscriptions.push(
      this.groupService.getAllUserGroupsByUserId(this.user.id).subscribe(
        (response: Group[]) => {
          this.groups = response;
        },
        (errorResponse: HttpErrorResponse) => {
          errorResponse.error.message;
        }
      )
    )
  }

  isOwner(userId: string) {
    return this.user.id === userId;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
