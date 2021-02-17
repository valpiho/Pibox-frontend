import {Component, OnDestroy, OnInit} from '@angular/core';
import {Group} from "../../../../model/group";
import {GroupService} from "../../../../core/services/group.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.scss']
})
export class GroupProfileComponent implements OnInit, OnDestroy {

  public group: Group;
  private groupId: string;
  private subscriptions: Subscription[] = [];

  public isLoading: boolean;

  constructor(private groupService: GroupService,
              private activatedRoute: ActivatedRoute) {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe(
        params => this.groupId = params["groupId"]
      )
    )
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.subscriptions.push(
      this.groupService.getGroup(this.groupId).subscribe(
        (response: Group) => {
          this.group = response;
          this.isLoading = false;
        },
        (errorResponse: HttpErrorResponse) => {
          errorResponse.error.message;
          this.isLoading = false;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
