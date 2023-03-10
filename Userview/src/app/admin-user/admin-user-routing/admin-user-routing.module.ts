import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from '../user-home/user-home.component';
import { UserLoginComponent } from '../user-login/user-login.component';


const routes: Routes = [
  { path: '', component: UserLoginComponent },
  {path:'userHome',component:UserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUserRoutingModule { }
