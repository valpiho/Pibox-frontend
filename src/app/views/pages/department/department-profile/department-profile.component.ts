import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {DepartmentService} from "../../../../core/services/department.service";
import {Department} from "../../../../model/department";
import {GroupService} from "../../../../core/services/group.service";
import {Group} from "../../../../model/group";

@Component({
  selector: 'app-group-profile',
  templateUrl: './department-profile.component.html'
})
export class DepartmentProfileComponent implements OnInit, OnDestroy {

  public group: Group;
  public department: Department;

  private groupId: string;
  private departmentId: string;
  private subscriptions: Subscription[] = [];

  constructor(private groupService: GroupService,
              private departmentService: DepartmentService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.groupId = this.activatedRoute.snapshot.parent.paramMap.get('groupId');
    this.departmentId = this.activatedRoute.snapshot.paramMap.get('departmentId');

    this.subscriptions.push(
      this.departmentService.getDepartment(this.groupId, this.departmentId).subscribe(
        (response: Department) => {
          this.department = response;
        },
        (errorResponse: HttpErrorResponse) => {
          errorResponse.error.message;
        }
      ),
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
