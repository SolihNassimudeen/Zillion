import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddUserAdminComponent } from './add-user-admin/add-user-admin.component';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    NavBarComponent,
    AddUserAdminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    NavBarComponent,
    AddUserAdminComponent
  ]
})
export class SharedModule { }
