import {Component, OnDestroy, OnInit} from '@angular/core';
import {Group} from "../../../../model/group";
import {GroupService} from "../../../../core/services/group.service";
import {Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit, OnDestroy {

  public groups: Group[];
  private subscriptions: Subscription[] = [];

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
