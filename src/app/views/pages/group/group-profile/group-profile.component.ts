import {Component, OnDestroy, OnInit} from '@angular/core';
import {Group} from "../../../../model/group";
import {GroupService} from "../../../../core/services/group.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html'
})
export class GroupProfileComponent implements OnInit, OnDestroy {

  public group: Group;

  private groupId: string;
  private subscriptions: Subscription[] = [];

  constructor(private groupService: GroupService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.groupId = this.activatedRoute.snapshot.paramMap.get('groupId');
    this.subscriptions.push(
      this.groupService.getGroup(this.groupId).subscribe(
        (response: Group) => {
          this.group = response;
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
