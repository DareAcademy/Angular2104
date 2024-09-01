import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from '../services/accounts.service';
import { Router } from '@angular/router';
import { SignIn } from '../Model/SignIn';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!:FormGroup
  
  constructor(private formBuilder:FormBuilder,
    private accountService:AccountsService,
    private router:Router){}

  ngOnInit(): void {
    this.LoginForm=this.formBuilder.group({
      txtUsername:['',Validators.required],
      txtPassword:['',Validators.required]
    })
  }

  onLogin(){
    debugger
    var user=new SignIn();
    user.username=this.LoginForm.value["txtUsername"]
    user.password=this.LoginForm.value["txtPassword"]
    this.accountService.Login(user).subscribe({
      next:data=>{
        debugger
        localStorage.setItem("SecurityKey",data.token)
        this.accountService.GetUserRoles(this.LoginForm.value["txtUsername"]).subscribe({
          next:data=>{
            debugger
            localStorage.setItem("Roles",data)
            this.router.navigate(['/clinic/dashboard'])
          },
          error:err=>{
            console.log("Error")
          }


        })
        
      },
      error:err=>console.log(err)
    })
    
  }

}
