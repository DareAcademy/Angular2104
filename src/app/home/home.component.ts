import { Component } from '@angular/core';
import { menu } from '../menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  liMenu!:any[]
  lifilteredMenu:any[]=[]
  role!:string
  constructor(private router:Router){
    debugger
    this.liMenu=menu
    this.role=JSON.parse(JSON.stringify(localStorage.getItem('Roles')))

    this.liMenu.forEach((element:any)=>{
      const isInRole=element.roles.find((x:any)=>x==this.role)
      if(isInRole !=undefined){
        this.lifilteredMenu.push(element)
      }
    })


  }

  logout(){
    localStorage.removeItem('Roles')
    localStorage.removeItem('SecurityKey')
    this.router.navigate(['/'])
  }
}
