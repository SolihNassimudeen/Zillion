import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-super-admin-home',
  templateUrl: './super-admin-home.component.html',
  styleUrls: ['./super-admin-home.component.css']
})
export class SuperAdminHomeComponent implements OnInit {

  AddAdmin: boolean = false;
  AddUserAdmin: boolean = false;
  productlist: any = []
  productverificationlist:any=[]

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getproductlist();
    this.getproductverificationlist();
  }

  getproductlist() {
    this.service.productlist()
      .subscribe((result: any) => {
        if (result) {
          this.productlist = result.productlist
        }
      })
  }

  getproductverificationlist(){    
    this.service.productverificationlist()
      .subscribe((result: any) => {
        if (result) {        
          this.productverificationlist = result.productverificationlist
        }
      })
  }
  AddAdminbutton() {
    this.AddAdmin = true;
  }
  AddUserAdminbutton() {
    this.AddUserAdmin = true;
  }
  cancelevent() {
    this.AddAdmin = false;
    this.AddUserAdmin = false;
  }

  productAccess(id:any){
    this.service.productAccess(id)
    .subscribe((result:any)=>{
      if(result){
        alert("product added");
        location.reload();
      }
    })
  }
  reject(id:any){
    this.service.productReject(id)
    .subscribe((result:any)=>{
      if(result){
        alert("product removed");
        location.reload();
      }
    })
  }
}
