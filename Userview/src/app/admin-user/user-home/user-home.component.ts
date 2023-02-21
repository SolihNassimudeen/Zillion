import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  Addproduct: boolean = false;
  productlist: any = []
  constructor(private service: ServiceService) { }
  ngOnInit(): void {
    this.getproductlist()
  }
  getproductlist() {
    this.service.productlist()
      .subscribe((result: any) => {
        if (result) {
          this.productlist = result.productlist
        }
      })
  }

  AddProduct() {
    this.Addproduct = true;
  }
  cancel() {
    this.Addproduct = false
  }
}
