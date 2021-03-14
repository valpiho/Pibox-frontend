import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DepartmentComponent} from "./department.component";
import {DepartmentProfileComponent} from './department-profile/department-profile.component';
import {DepartmentCreateComponent} from './department-create/department-create.component';
import {DepartmentListComponent} from './department-list/department-list.component';
import {FormsModule} from "@angular/forms";
import {FeahterIconModule} from "../../../core/feather-icon/feather-icon.module";
import {NgbAccordionModule, NgbDropdownModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: '',
    component: DepartmentComponent,
    children: [
      {
        path: '',
        component: DepartmentListComponent,
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: DepartmentCreateComponent,
        pathMatch: 'full'
      },
      {
        path: ':departmentId',
        component: DepartmentProfileComponent,
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [
    DepartmentProfileComponent,
    DepartmentCreateComponent,
    DepartmentListComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    FeahterIconModule,
    NgbAccordionModule,
    NgbDropdownModule,
    NgbTooltipModule
  ]
})
export class DepartmentModule {
}
