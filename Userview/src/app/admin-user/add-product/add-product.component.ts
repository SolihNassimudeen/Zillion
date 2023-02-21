import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  @Input() Addproduct: boolean = false;
  @Output() onCancel = new EventEmitter();

  AddProductArray = this.input.group({
    productName: ['', [Validators.required]],
    productDiscription: ['', [Validators.required]],
    productprice: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    Discount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    GST: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  constructor(private input: FormBuilder, private service: ServiceService) { }

  Add() {
    if (this.AddProductArray.valid) {
      this.service.AddProduct(this.AddProductArray.value.productName, this.AddProductArray.value.productDiscription, this.AddProductArray.value.productprice, this.AddProductArray.value.Discount, this.AddProductArray.value.GST)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            this.cancel();
          }
        })
    } else {
      alert('not valid');
    }
  }

  cancel() {
    this.onCancel.emit();
  }
}
