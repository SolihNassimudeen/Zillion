import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  AddUserAdmin: boolean = false;
  productlist: any = []
  productApproveRequestlist: any = []

  constructor(private service: ServiceService) { }
  ngOnInit(): void {
    this.getproductlist()
    this.getproductApproveRequestlist()
  }

  getproductlist() {
    this.service.productlist()
      .subscribe((result: any) => {
        if (result) {
          this.productlist = result.productlist
        }
      })
  }

  getproductApproveRequestlist() {
    this.service.productApproveRequestlist()
      .subscribe((result: any) => {
        if (result) {
          this.productApproveRequestlist = result.productApproveRequestlist
        }
      })
  }

  AddUserAdminbutton() {
    this.AddUserAdmin = true;
  }

  cancelevent() {
    this.AddUserAdmin = false;
  }

  productApprove(id: any) {
    this.service.productApprove(id)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message);
          location.reload()
        }
      })
  }
  reject(id: any) {
    this.service.productAdminreject(id)
      .subscribe((result: any) => {
        if (result) {
          alert('product removed');
          location.reload();
        }
      })
  }
}
