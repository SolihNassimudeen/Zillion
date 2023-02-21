import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminUserRoutingModule } from './admin-user-routing/admin-user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './add-product/add-product.component';






@NgModule({
  declarations: [
    UserLoginComponent,
    UserHomeComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AdminUserRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ]
})
export class AdminUserModule { }
