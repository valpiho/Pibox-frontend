import {Component, OnDestroy, OnInit} from '@angular/core';
import {Group} from "../../../../model/group";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";
import {GroupService} from "../../../../core/services/group.service";

@Component({
  selector: 'app-group-find',
  templateUrl: './group-find.component.html',
  styleUrls: ['./group-find.component.scss']
})
export class GroupFindComponent implements OnInit, OnDestroy {

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
