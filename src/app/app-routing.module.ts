import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'clinic',component:HomeComponent,children:[
    {path:'NewPatient',component:NewPatientComponent},
    {path:'PatientList',component:PatientListComponent},
    {path:'NewCountry',component:NewCountryComponent},
    {path:'CountryList',component:CountryListComponent},
    {path:'NewUser',component:AddUsersComponent},
    {path:'NewRole',component:NewRoleComponent},
    {path:'UserList',component:UserListComponent},
    {path:'UserRoles',component:UserRolesComponent},
    {path:'dashboard',component:DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
