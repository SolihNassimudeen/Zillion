import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {

  @Input() AddAdmin: boolean = false;
  @Output() onCancel = new EventEmitter();

  AddAdminArray = this.input.group({
    UserId: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(private input: FormBuilder, private service: ServiceService) { }

  Add() {

    if (this.AddAdminArray.valid) {
      this.service.AddAdmin(this.AddAdminArray.value.UserId, this.AddAdminArray.value.password)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message);
            this.cancel()
          }
        }, (result) => {
          alert(result.error.message);
        })
    } else {
      alert('Not in valid form');
    }
  }
  cancel() {
    this.onCancel.emit();
  }
}