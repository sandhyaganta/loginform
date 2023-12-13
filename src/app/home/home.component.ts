import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  res: any;
  data: any;
  
  updateForm!: FormGroup
  constructor(private api: ApiService, private fromBilder: FormBuilder) {

  }
  ngOnInit(): void {


    this.api.getUsers().subscribe((res: any) => {
      console.log(res, 'alluers');
      this.data = res


    });
    this.updateForm = this.fromBilder.group({
      name: [""],
      mobileno: [""],
      email: [""],
      gender: [""],
      password: [""],
      qualification: [""],
      address: [""],
      id:[""]
    });



  }
  userdeleted(id: any) {
    this.api.deleteUser(id).subscribe((res: any) => {
      window.location.reload()
    })
  }

  userEdit(d: any) {
    console.log(d, 'data for update');
    this.updateForm.patchValue({
      name: d.name,
      mobileno: d.mobileno,
      email: d.email,
      gender: d.gender,
      password: d.password,
      qualification: d.qualification,
      address: d.address,
      id:d._id
    })

  }

  updated(){
    console.log(this.updateForm.value, 'updated values');
    this.api.updateUser(this.updateForm.value).subscribe((res:any)=>{
      window.location.reload()

    })
    
    
  }

  userid(){
   let id=localStorage.getItem("id")
    this.api.getid(id).subscribe((res:any) => {
      console.log(res);
      

    })
  }

}
