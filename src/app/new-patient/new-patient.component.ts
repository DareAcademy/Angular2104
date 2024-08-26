import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../services/countryservice';
import { CountryDTO } from '../Model/CountryDTO';
import { PatientService } from '../services/patient.service';
import { PatientDTO } from '../Model/PatientDTO';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  IsEdit:boolean=false
  patientForm!:FormGroup
  countries!:CountryDTO[]
  patientId!:number
constructor(private formBuilder:FormBuilder,
            private countryService:CountryService,
            private patientService:PatientService,
            private activateRouter:ActivatedRoute){}


ngOnInit(): void {
  debugger
  if(this.activateRouter.snapshot.queryParams['patientId'] !=undefined){
     this.patientId= this.activateRouter.snapshot.queryParams['patientId']
     this.IsEdit=true
    this.edit()
  }
  // recieve the patient Id
  // send request to API
  // get data and fill the form

  this.patientForm=this.formBuilder.group({
    txtFName:['',Validators.required],
    txtLName:['',Validators.required],
    txtDOB:['',Validators.required],
    //txtPhone:['',Validators.compose([Validators.required,Validators.pattern('07(7|8|9)\d{7}')])],
    txtPhone:['',Validators.required],
    txtEmail:[''],
    ddlcountry:['',Validators.required]
    
  })

  this.LoadAll()
  

}

edit(){
//id
this.patientService.load(this.patientId).subscribe({
  next:data=>{
    debugger
    this.patientForm.controls['txtFName'].setValue(data.fName)
    this.patientForm.controls['txtLName'].setValue(data.lName)
    this.patientForm.controls['txtDOB'].setValue(data.dob)
    this.patientForm.controls['txtPhone'].setValue(data.phone)
    this.patientForm.controls['txtEmail'].setValue(data.email)
    this.patientForm.controls['ddlcountry'].setValue(data.country_Id)
  },
  error:err=>{
    console.log('error')
  }
})
}

LoadAll(){
  this.countryService.LoadAll().subscribe({
    next:data=>{
      this.countries=data
    },
    error:err=>{
      console.log("error")
    }
  })
}
save(){
if(this.patientForm.valid==true){
  debugger
  var patient=new PatientDTO();
  patient.fName=this.patientForm.value['txtFName']
  patient.lName=this.patientForm.value['txtLName']
  patient.dob=this.patientForm.value['txtDOB']
  patient.phone=this.patientForm.value['txtPhone']
  patient.email=this.patientForm.value['txtEmail']
  patient.country_Id=this.patientForm.value['ddlcountry']

  this.patientService.insert(patient).subscribe({
    next:()=>{
      debugger
      console.log("Success")
    },
    error:err=>{
      console.log("error")
    }
  })
  
}


}

update(){
  debugger
  var patient=new PatientDTO();
  patient.id=this.patientId
  patient.fName=this.patientForm.value['txtFName']
  patient.lName=this.patientForm.value['txtLName']
  patient.dob=this.patientForm.value['txtDOB']
  patient.phone=this.patientForm.value['txtPhone']
  patient.email=this.patientForm.value['txtEmail']
  patient.country_Id=this.patientForm.value['ddlcountry']

  this.patientService.update(patient).subscribe({
    next:data=>{
      console.log("success")
    },
    error:err=>{
      console.log("error")
    }
  })
}
}
