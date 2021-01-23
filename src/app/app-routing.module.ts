import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import {LoginComponent} from "./views/pages/auth/login/login.component";
import {RegisterComponent} from "./views/pages/auth/register/register.component";
import {BaseComponent} from "./views/layout/base/base.component";


const routes: Routes = [
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./views/pages/general/general.module').then(m => m.GeneralModule)
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  //{ path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
