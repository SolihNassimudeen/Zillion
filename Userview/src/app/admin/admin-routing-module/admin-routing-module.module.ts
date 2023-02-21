import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  {path:'adminHome',component:AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModuleModule { }
