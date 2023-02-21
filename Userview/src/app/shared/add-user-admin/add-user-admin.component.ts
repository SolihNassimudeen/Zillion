import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-add-user-admin',
  templateUrl: './add-user-admin.component.html',
  styleUrls: ['./add-user-admin.component.css']
})
export class AddUserAdminComponent {
@Input() AddUserAdmin:boolean=false
@Output() onCancel = new EventEmitter();
AddUserAdminarray = this.input.group({
  UserId: ['', [Validators.required]],
  password: ['', [Validators.required, Validators.minLength(3)]]
})

constructor(private input: FormBuilder,private service:ServiceService) { }

Add() {
  if(this.AddUserAdminarray.valid){
    this.service.AddUserAdmin(this.AddUserAdminarray.value.UserId,this.AddUserAdminarray.value.password)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
        this.cancel()
      }
    },(result)=>{
      alert(result.error.message);
    })
  }else{
    alert('Not in valid form');
  }
}
cancel() {    
  this.onCancel.emit();
}

}
