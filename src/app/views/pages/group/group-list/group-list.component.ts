import {Component, OnDestroy, OnInit} from '@angular/core';
import {Group} from "../../../../model/group";
import {GroupService} from "../../../../core/services/group.service";
import {Subscription} from "rxjs";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {User} from "../../../../model/user";
import {AuthenticationService} from "../../../../core/services/auth/authentication.service";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html'
})
export class GroupListComponent implements OnInit{

  public user: User;
  public groups: Group[];

  constructor(private groupService: GroupService,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.user = this.authenticationService.getUserFromLocalCache();
    this.groups = this.user.groups;
  }

  isOwner(userId: string) {
    return this.user.userId === userId;
  }
}
