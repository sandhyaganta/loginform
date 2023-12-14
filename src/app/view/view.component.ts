import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  res:any;
  updateForm!: FormGroup;
  data:any;

  constructor(private api:ApiService,private fromBilder:FormBuilder,private route:Router){

  }
  ngOnInit():void{
    let user_id=localStorage.getItem("id")
    this.api.getid(user_id).subscribe((res: any) => {
      console.log(res);
      this.data = res


    });
    this.updateForm = this.fromBilder.group({
     fullname: [""],
     username:[""],
      mobileno: [""],
      email: [""],
      gender: [""],
      password: [""],
      qualification: [""],
      address: [""],
      id:[""]
    });
  }
  

}
