import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent {
  RegistrationForm!: FormGroup;
constructor(private fromBilder:FormBuilder,private api:ApiService,private route:Router){}
ngOnInit():void{

  this.RegistrationForm=this.fromBilder.group({
    fullname:["",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]],
    username:["",[Validators.required,Validators.minLength(3),Validators.pattern("[a-z]*")]],
    mobileno:["",[Validators.maxLength(10),Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email:["",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    gender:[""],
    password:["",[Validators.required,Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]],
    qualification:[""],
    address:[""]
  
  })
  }
   get fullname(){
    return this.RegistrationForm.get('fullname');
    
    }
    get username(){
      return this.RegistrationForm.get('username');
      
      }
    get password(){
      return this.RegistrationForm.get('password');
      
      }
    get email(){
      return this.RegistrationForm.get('email');
      
      }
    get mobileno(){
      return this.RegistrationForm.get('mobileno');
  
    }
  addUser(){
    console.log(this.RegistrationForm.value,"posted user successfuly")
    this.api.addUser(this.RegistrationForm.value).subscribe((res:any) => {
      console.log(res);
      this.route.navigate(["/login"])
    });
  }
  
}
