import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { CountryService } from './services/countryservice';
import { AddUsersComponent } from './add-users/add-users.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationInterceptor } from './Interceptors/authentication.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorhandlingInterceptor } from './Interceptors/errorhandling.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NewCountryComponent,
    CountryListComponent,
    NewPatientComponent,
    PatientListComponent,
    AddUsersComponent,
    NewRoleComponent,
    UserListComponent,
    UserRolesComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CountryService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthenticationInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorhandlingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
