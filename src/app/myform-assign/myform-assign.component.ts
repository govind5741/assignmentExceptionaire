import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder, FormArray} from '@angular/forms';
import * as EmailValidator from 'email-validator';
@Component({
  selector: 'app-myform-assign',
  templateUrl: './myform-assign.component.html',
  styleUrls: ['./myform-assign.component.scss']
})
export class MyformAssignComponent implements OnInit {
  islanguage:boolean=false;
  ordersData = [
    { id: 100, name: 'English' },
    { id: 200, name: 'Hindi' },
    { id: 300, name: 'Marathi' },
    { id: 400, name: 'Tamil' }
  ];
  constructor(private formBuilder: FormBuilder) { 

    this.addCheckboxes();
  }

  ngOnInit() {
  }

  private addCheckboxes() {
    this.ordersData.forEach((o, i) => {
      const control = new FormControl(i === 0);
      (this.profileForm.controls.orders as FormArray).push(control);
     
    });
  }


  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    gender: new FormControl('',Validators.required),
    orders: new FormArray([]),
    Dob: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    resume: new FormControl(''),


  });
  submitted = false;
  get f() { return this.profileForm.controls; }

  isValidEmail:boolean=EmailValidator.validate(this.profileForm.value.email);


  onSubmit() {
    if(!this.profileForm.value.firstName){
      alert('please Enter First Name')
    }
   else if(!this.profileForm.value.lastName){
      alert('please Enter Last Name')
    }
   else if(!this.profileForm.value.email){

      alert('please Enter Email')
    }
    else if(!this.isValidEmail){

      alert('please Enter Valid Email')
    }
   else if(!this.profileForm.value.gender){
      alert('please Enter Gender')
    }
  else  if(this.profileForm.value.orders.value){
      alert('please Enter Language')
    }
  else  if(!this.profileForm.value.Dob){
      alert('please Enter Date Of Birth')
    }
  else  if(!this.profileForm.value.city){
      alert('please Enter City')
    }
   else if(!this.profileForm.value.state){
      alert('please Enter State')
    }
    else if(!this.profileForm.value.resume){
      alert('please select Resume')
    }else{
      alert('Your Form Submitted Successfully')

    }
    
    console.log(this.profileForm.value)
  }
  
}
