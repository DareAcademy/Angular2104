import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { CountryDTO } from '../Model/CountryDTO';
import { CountryService } from '../services/countryservice';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.css']
})
export class NewCountryComponent implements OnInit {

  countryForm!:FormGroup

  constructor(private formBuilder:FormBuilder,
              private countryService:CountryService){}


ngOnInit(): void {
  this.countryForm=this.formBuilder.group({
    txtName:['',Validators.required]
  })
}

save(){
  debugger
  if(this.countryForm.valid==true){
  let country=new CountryDTO()
  country.name=this.countryForm.value['txtName']

  this.countryService.Insert(country).subscribe({
    
    next:data=>{
      debugger
      console.log("success")
    },
    error:err=>{
      debugger
      console.log("error happned")
    }
    
  })
}
}

}


