import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { PatientDTO } from '../Model/PatientDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
  patientPhone!:string
  patients!:PatientDTO[]

  constructor(private patientService:PatientService,
              private router:Router){}

  search(){
    this.patientService.Search(this.patientPhone).subscribe({
      next:data=>{
      debugger
      this.patients=data     
      },
      error:err=>{
        console.log("error")
      }

    })
    
  }
  edit(id:number){
    // navigate to new patient
    // pass patient Id to new patient

    this.router.navigate(['/NewPatient'],{queryParams:{patientId:id}})
  }
}
