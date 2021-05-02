import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GroupComponent} from "./group.component";
import { GroupProfileComponent } from './group-profile/group-profile.component';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupFindComponent } from './group-find/group-find.component';
import { GroupListComponent } from './group-list/group-list.component';
import {FormsModule} from "@angular/forms";
import {FeahterIconModule} from "../../../core/feather-icon/feather-icon.module";
import {NgbAccordionModule, NgbDropdownModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: '',
    component: GroupComponent,
    children: [
      {
        path: 'profile/groups',
        component: GroupListComponent,
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: GroupCreateComponent,
        pathMatch: 'full'
      },
      {
        path: 'find',
        component: GroupFindComponent,
        pathMatch: 'full'
      },
      {
        path: ':groupId',
        component: GroupProfileComponent,
        pathMatch: 'full'
      },
      {
        path: ':groupId/departments',
        loadChildren: () => import('../department/department.module').then(m => m.DepartmentModule),
      }
    ]
  }
]

@NgModule({
  declarations: [
    GroupProfileComponent,
    GroupCreateComponent,
    GroupFindComponent,
    GroupListComponent,
    GroupComponent
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
export class GroupModule { }
