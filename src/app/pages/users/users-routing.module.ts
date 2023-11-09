import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

const routes: Routes = [
  {
    path: "",
    redirectTo : 'user_list',
    pathMatch : 'full'
  },
  {
    path: "user_list",
    component: UsersListComponent,
  },
  {
    path: "user_details/:id",
    component: UsersDetailsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
