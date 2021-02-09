import { Component, OnInit } from '@angular/core';
import {Group} from "../../../../model/group";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {GroupService} from "../../../../core/services/group.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthenticationService} from "../../../../core/services/auth/authentication.service";

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss']
})
export class GroupCreateComponent implements OnInit {

  public showLoading: boolean;

  private subscriptions: Subscription[] = [];

  constructor(private router: Router,
              private groupService: GroupService,
              private authenticationService: AuthenticationService) {}


  ngOnInit(): void {
  }

  onCreate(group: Group): void {
    this.showLoading = true;
    group.groupOwner = this.authenticationService.getUserFromLocalCache();
    this.subscriptions.push(
      this.groupService.createNewGroup(group).subscribe(
        (response: Group) => {
          this.showLoading = false;
          this.router.navigateByUrl('');
        },
        (errorResponse: HttpErrorResponse) => {
          errorResponse.error.message;
          this.showLoading = false;
        }
      )
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
