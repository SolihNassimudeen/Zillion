import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren:() => import('./admin-user/admin-user.module').then(mdl=>mdl.AdminUserModule) },

  { path: 'SuperAdmin', loadChildren: () => import('./super-admin/super-admin.module').then(mdl=>mdl.SuperAdminModule) },
  
  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(mdl=>mdl.AdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
