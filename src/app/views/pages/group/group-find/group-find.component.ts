import {Component, OnDestroy, OnInit} from '@angular/core';
import {Group} from "../../../../model/group";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";
import {GroupService} from "../../../../core/services/group.service";
import {User} from "../../../../model/user";
import {AuthenticationService} from "../../../../core/services/auth/authentication.service";

@Component({
  selector: 'app-group-find',
  templateUrl: './group-find.component.html'
})
export class GroupFindComponent implements OnInit, OnDestroy {

  public user: User;
  public groups: Group[];
  private subscriptions: Subscription[] = [];

  constructor(private authenticationService: AuthenticationService,
              private groupService: GroupService) { }

  ngOnInit(): void {
    this.user = this.authenticationService.getUserFromLocalCache();
    this.subscriptions.push(
      this.groupService.getAllActivePublicGroups().subscribe(
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
    return this.user.userId === userId;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
