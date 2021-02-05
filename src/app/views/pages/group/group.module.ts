import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GroupComponent} from "./group.component";
import { GroupProfileComponent } from './group-profile/group-profile.component';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupFindComponent } from './group-find/group-find.component';
import { GroupListComponent } from './group-list/group-list.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: GroupComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: GroupListComponent
      },
      {
        path: 'profile',
        component: GroupProfileComponent
      },
      {
        path: 'create',
        component: GroupCreateComponent
      },
      {
        path: 'find',
        component: GroupFindComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    GroupProfileComponent,
    GroupCreateComponent,
    GroupFindComponent,
    GroupListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GroupModule { }
