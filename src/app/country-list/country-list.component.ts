import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/countryservice';
import { CountryDTO } from '../Model/CountryDTO';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries!:CountryDTO[]
  constructor(private countryService:CountryService){}
  
  ngOnInit(): void {
    this.loadAll()
  }

  delete(id:number){
    debugger
    this.countryService.delete(id).subscribe({
      next:()=>{
        debugger
        this.loadAll()

        
      },
      error:err=>{
        console.log("error")
      }
    })
  }

  loadAll(){
    this.countryService.LoadAll().subscribe({
      next:data=>{
        debugger
        this.countries=data
      },
      error:err=>{
        console.log("error")
      }
    })
  }
}
