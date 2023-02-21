import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  adminUserArray = this.Input.group({
    UserId: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })
  constructor(private route: Router, private Input: FormBuilder, private service: ServiceService) { }

  ngOnInit() { }

  SuperAdmin() {
    this.route.navigateByUrl("SuperAdmin")
  }
  Admin() {
    this.route.navigateByUrl("Admin")
  }
  Login() {
    if (this.adminUserArray.valid) {
      this.service.UserAdminlogin(this.adminUserArray.value.UserId, this.adminUserArray.value.password)
      .subscribe((result:any)=>{
        if(result){
          this.route.navigate(['/userHome']);
        }
      },(result)=>{
        alert(result.error.message);
      })
    } else {
      alert("Invalid entry")
    }
  }
}
