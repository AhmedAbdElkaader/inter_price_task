import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-component/login/login.component';
import { PageNotFoundComponent } from './auth-component/page-not-found/page-not-found.component';
import {  authGuard } from './core/guard/auth.guard';
import { loginGuard } from './core/guard/login.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  
  {
    path: "login",
    canActivate : [loginGuard],
    component: LoginComponent,
  },
  {
    path: 'pages',
    canActivate : [authGuard],
    loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule)
  },
  {
    path: "**",
    canActivate : [authGuard],
    component: PageNotFoundComponent,
  },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
