import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUp } from '../Model/SignUp';
import { Roles } from '../Model/Roles';
import { UserRoles } from '../Model/UserRoles';
import { SignIn } from '../Model/SignIn';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private client:HttpClient) { }

  CreateAccount(user:SignUp):Observable<any>{
    return this.client.post('http://localhost/Clinic2104API/api/Accounts/SignUP',user)
  }

  AddRole(role:Roles):Observable<any>{
    return this.client.post('http://localhost/Clinic2104API/api/Accounts/AddRole',role)
  }

  UserList():Observable<any>{
    return this.client.get('http://localhost/Clinic2104API/api/Accounts/UserList')
  }

  UserRoles(userId:string):Observable<any>{
    return this.client.get('http://localhost/Clinic2104API/api/Accounts/UserRoles?UserId='+userId)
  }

  UpdateRole(userRoles:UserRoles[]):Observable<any>{
    return this.client.post("http://localhost/Clinic2104API/api/Accounts/UpdateRole",userRoles)
  }

  Login(user:SignIn):Observable<any>{
    return this.client.post('http://localhost/Clinic2104API/api/Accounts/Login',user)
  }

  GetUserRoles(username:string):Observable<any>{
    return this.client.get('http://localhost/Clinic2104API/api/Accounts/GetUserRoles?username='+username)
  }

}
