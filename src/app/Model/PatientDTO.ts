import { CountryDTO } from "./CountryDTO"

export class PatientDTO{
    id!:number
    fName!:string
    lName!:string
    dob!:Date
    phone!:string
    email!:string
    country_Id!:number
    country!:CountryDTO
}