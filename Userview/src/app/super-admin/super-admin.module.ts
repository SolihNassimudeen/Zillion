import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminLoginComponent } from './super-admin-login/super-admin-login.component';
import { SuperAdminHomeComponent } from './super-admin-home/super-admin-home.component';
import { SuperAdminRoutingModule } from './super-admin-routing/super-admin-routing.module';
import{ReactiveFormsModule} from '@angular/forms'
import { SharedModule } from '../shared/shared.module';
import { AddAdminComponent } from './add-admin/add-admin.component';


@NgModule({
  declarations: [
    SuperAdminLoginComponent,
    SuperAdminHomeComponent,
    AddAdminComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SuperAdminModule { }
