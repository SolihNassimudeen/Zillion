import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminHomeComponent } from '../super-admin-home/super-admin-home.component';
import { SuperAdminLoginComponent } from '../super-admin-login/super-admin-login.component';


const routes: Routes = [
  { path: '', component: SuperAdminLoginComponent },
  { path: 'Superadminhome', component: SuperAdminHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
