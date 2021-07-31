import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {Department} from '../../../../model/department';
import {DepartmentService} from '../../../../core/services/department.service';
import {ActivatedRoute} from '@angular/router';
import {Group} from '../../../../model/group';
import {GroupService} from '../../../../core/services/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './department-list.component.html'
})
export class DepartmentListComponent implements OnInit, OnDestroy {

  public group: Group;

  private groupId: string;
  private subscriptions: Subscription[] = [];

  constructor(private groupService: GroupService,
              private departmentService: DepartmentService,
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
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
