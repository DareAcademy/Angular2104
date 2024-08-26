import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientDTO } from '../Model/PatientDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private client:HttpClient) { }

  insert(patient:PatientDTO):Observable<any>{
    return this.client.post('http://localhost/Clinic2104API/api/Patient',patient)
  }

  Search(phone:string):Observable<any>{
   return this.client.get('http://localhost/Clinic2104API/api/Patient/SearchPatient?phone='+phone)
  }

  load(patientId:number):Observable<any>{
   return this.client.get('http://localhost/Clinic2104API/api/Patient/LoadPatient?Id='+patientId)
  }

  update(patient:PatientDTO):Observable<any>{
    return  this.client.put('http://localhost/Clinic2104API/api/Patient',patient)
  }
}
