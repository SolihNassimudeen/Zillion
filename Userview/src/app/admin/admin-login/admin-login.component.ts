import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms"
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  adminArray = this.Input.group({
    UserId: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(private route:Router, private Input: FormBuilder,private service:ServiceService) { }

  AdminUser() {
    this.route.navigateByUrl("")
  }
  SuperAdmin() {
    this.route.navigateByUrl("SuperAdmin")
  }
  Login(){
    if(this.adminArray.valid){
      this.service.Adminlogin(this.adminArray.value.UserId,this.adminArray.value.password)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message);
          this.route.navigate(['Admin/adminHome'])
        }
      },(result)=>{
        alert(result.error.message)
      })
    }else{
      alert("Not in a valid form")
    }
  }
}
