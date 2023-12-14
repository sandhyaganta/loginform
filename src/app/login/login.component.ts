import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Loginform!:FormGroup;
  user:any;
  constructor(private from:FormBuilder,private api:ApiService,private route : Router){
    
  }
  ngOnInit(): void {
    this.Loginform=this.from.group({
      username:[""],
      password:[""]
    
  })
 

  }
  getUser(){
    console.log(this.Loginform.value,"login successfuly");
    this.api.userLogin(this.Loginform.value).subscribe((res:any) => {
      console.log("res");
      localStorage.setItem("id",res._id)
      
      
     
      this.route.navigate(["/home"])

    });

  }

}
