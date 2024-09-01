import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientDTO } from '../Model/PatientDTO';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl=''
  constructor(private client:HttpClient) {
    this.baseUrl=environment.APIUrl
   }

  insert(patient:PatientDTO):Observable<any>{
    return this.client.post(this.baseUrl+ '/api/Patient',patient)
  }

  Search(phone:string,name:string):Observable<any>{
   return this.client.get(this.baseUrl+'/api/Patient/SearchPatient?phone='+phone+'&name='+name)
  }

  load(patientId:number):Observable<any>{
   return this.client.get(this.baseUrl+'/api/Patient/LoadPatient?Id='+patientId)
  }

  update(patient:PatientDTO):Observable<any>{
    return  this.client.put(this.baseUrl+'/api/Patient',patient)
  }


}
