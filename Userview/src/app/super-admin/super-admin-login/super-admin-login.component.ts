import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'app-super-admin-login',
  templateUrl: './super-admin-login.component.html',
  styleUrls: ['./super-admin-login.component.css']
})
export class SuperAdminLoginComponent {

  SuperadminArray = this.Input.group({
    UserId: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(private route:Router, private Input: FormBuilder) { }

  AdminUser() {
    this.route.navigateByUrl("")
  }
  Admin() {
    this.route.navigateByUrl("Admin")
  }

  Login() {
    if (this.SuperadminArray.valid) {
      if (this.SuperadminArray.value.UserId == 'admin') {
        if (this.SuperadminArray.value.password == 'admin') {
          this.route.navigate(['SuperAdmin/Superadminhome']);
        } else {
          alert("Wrong Password");
        }
      } else {
        alert('Wrong Super Admin Id');
      }
    } else {
      alert("Invalid entry")
    }
  }
}
