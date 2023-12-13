import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private getUrl='http://localhost:3000';

  constructor( private http: HttpClient) { }
  userLogin(a:any){
    return this.http.post("http://localhost:3000/user/login", a);

  }
  addUser(data:any){
    return this.http.post("http://localhost:3000/user/create",data);
  }
  getUsers(){
    return this.http.get("http://localhost:3000/get/users")

  }
  deleteUser(id:any){
    return this.http.delete("http://localhost:3000/user/deleteById/"+id)
  }
  updateUser(data:any){
    return this.http.put("http://localhost:3000/user/updateById/"+data.id,data)
  }
  getid(id:any){
    return this.http.get("http://localhost:3000/user/getById/"+id)

  }
}
