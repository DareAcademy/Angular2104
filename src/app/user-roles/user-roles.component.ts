import { Component, OnInit } from '@angular/core';
import { UserRoles } from '../Model/UserRoles';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {
 
  userId!:string
  userRoles!:UserRoles[]
  constructor(private activatedRoute:ActivatedRoute,
              private accountService:AccountsService){}

  ngOnInit(): void {
    
      this.userId=this.activatedRoute.snapshot.queryParams["Id"]
      this.loadRoles()
    
  }

  loadRoles(){
    this.accountService.UserRoles(this.userId).subscribe({
      next:data=>{
        this.userRoles=data
      },
      error:err=>console.log(err)
    })  
  }

  onUpdate(userRoles:UserRoles[]){
    this.accountService.UpdateRole(userRoles).subscribe({
      next:data=>{
        alert("success")
      },
      error:err=>{
        alert("error happned")
      }
    })
  }
}
