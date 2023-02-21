import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  UserAdminlogin(UserId: any, password: any) {
    const data = {
      "UserId": UserId,
      "password": password
    }
    return this.http.post('http://localhost:3000/UserAdminlogin', data)
  }

  Adminlogin(UserId: any, password: any) {
    const data = {
      "UserId": UserId,
      "password": password
    }
    return this.http.post('http://localhost:3000/Adminlogin', data)

  }

  AddAdmin(UserId: any, password: any) {
    const data = {
      "UserId": UserId,
      "password": password
    }
    return this.http.post('http://localhost:3000/AddAdmin', data)
  }

  AddUserAdmin(UserId: any, password: any) {
    const data = {
      "UserId": UserId,
      "password": password
    }
    return this.http.post('http://localhost:3000/AddUserAdmin', data)
  }

  productlist() {
    return this.http.get('http://localhost:3000/productlist');
  }

  productverificationlist() {
    return this.http.get('http://localhost:3000/productverificationlist');
  }
  productAccess(id: any) {
    return this.http.post('http://localhost:3000/productAccess', ({ "id": id }))
  }
  productReject(id: any) {
    return this.http.delete(`http://localhost:3000/productReject/${id}`)
  }
  productApproveRequestlist() {
    return this.http.get('http://localhost:3000/productApproveRequestlist')
  }
  productApprove(id: any) {
    return this.http.post('http://localhost:3000/productApprove', ({ "id": id }))
  }

  productAdminreject(id: any) {
    return this.http.delete(`http://localhost:3000/productAdminreject/${id}`)
  }

  AddProduct(productName:any,productDiscription:any,productprice:any,Discount:any,GST:any){
    const data={
      "productName":productName,
      "productDiscription":productDiscription,
      "productprice":productprice,
      "Discount":Discount,
      "GST":GST
    }
    return this.http.post('http://localhost:3000/AddProduct',data)
  }
}
