import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "../../../../model/user";
import {AuthenticationService} from "../../../../core/services/auth/authentication.service";
import {Department} from "../../../../model/department";
import {DepartmentService} from "../../../../core/services/department.service";
import {ActivatedRoute} from "@angular/router";
import {Group} from "../../../../model/group";
import {GroupService} from "../../../../core/services/group.service";

@Component({
  selector: 'app-group-list',
  templateUrl: './department-list.component.html'
})
export class DepartmentListComponent implements OnInit, OnDestroy {

  public departments: Department[];
  public group: Group;

  private user: User;
  private groupId: string;
  private subscriptions: Subscription[] = [];

  constructor(private groupService: GroupService,
              private departmentService: DepartmentService,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.groupId = this.activatedRoute.snapshot.paramMap.get('groupId');
    console.log(this.groupId);
    this.subscriptions.push(
      this.departmentService.getAllGroupDepartments(this.groupId).subscribe(
        (response: Department[]) => {
          this.departments = response;
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
    )
  }

  isOwner(id: number) {
    return this.user.id === id;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
