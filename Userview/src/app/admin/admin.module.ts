import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModuleModule } from './admin-routing-module/admin-routing-module.module';
import{ReactiveFormsModule} from '@angular/forms'
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModuleModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
