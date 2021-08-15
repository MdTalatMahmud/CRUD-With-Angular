import { ListUsersComponent } from './users/list-users/list-users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {path:'users',
    children:[
      {path:'view/:id', component: ViewUsersComponent},
      {path:'', component:ListUsersComponent},
      {path:'delete/:id', component:DeleteUserComponent},
      {path:'edit/:id', component:EditUserComponent},
      {path: 'create', component:AddUserComponent},
      {path: 'list', component:ListUsersComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
