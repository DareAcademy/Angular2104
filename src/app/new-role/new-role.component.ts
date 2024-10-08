import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from '../services/accounts.service';
import { Roles } from '../Model/Roles';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent implements OnInit {

  roleForms!:FormGroup;
  constructor(private formBuilder:FormBuilder, private accountService:AccountsService){}

  ngOnInit(): void {
    this.roleForms=this.formBuilder.group({
      txtName:['',Validators.required]
    })
  }

  Save(){
    var role=new Roles();
    role.name=this.roleForms.value["txtName"]

    this.accountService.AddRole(role).subscribe({
      next:data=>{console.log("success")},
      error:err=>console.log(err)
    })
  }
}
