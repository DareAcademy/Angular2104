import {HttpClient} from '@angular/common/http'
import { CountryDTO } from '../Model/CountryDTO'
import {Observable} from 'rxjs'
import {Injectable} from '@angular/core'

@Injectable()
export class CountryService{
    constructor(private client:HttpClient){}

    Insert(obj:CountryDTO):Observable<any>{
      debugger
      return this.client.post('http://localhost/Clinic2104API/api/Country',obj)
    }

    LoadAll():Observable<any>{
      return this.client.get('http://localhost/Clinic2104API/api/Country/CountryList')
    }

    delete(id:number):Observable<any>{
      return  this.client.delete('http://localhost/Clinic2104API/api/Country?Id='+id)
    }
    LoadByName(name:string){
      return this.client.get('http://localhost/Clinic2104API/api/Country/LoadByName?name='+name)
    }
}