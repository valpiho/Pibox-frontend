import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Department} from '../../../../model/department';
import {DepartmentService} from '../../../../core/services/department.service';
import {DepartmentCreationDto} from "../../../../model/dto/department-creation-dto";

@Component({
  selector: 'app-group-create',
  templateUrl: './department-create.component.html'
})
export class DepartmentCreateComponent implements OnInit, OnDestroy {

  public showLoading: boolean;

  private groupId: string;
  private subscriptions: Subscription[] = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private departmentService: DepartmentService) {}


  ngOnInit(): void {
    this.groupId = this.activatedRoute.snapshot.parent.paramMap.get('groupId');
  }

  onCreate(department: DepartmentCreationDto): void {
    this.showLoading = true;
    this.subscriptions.push(
      this.departmentService.createNewDepartment(this.groupId, department).subscribe(
        (response: HttpResponse<Department>) => {
          this.showLoading = false;
          this.router.navigateByUrl(`/groups/${this.groupId}/departments/${response.body.departmentId}`);
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
