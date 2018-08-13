import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importing FormsModule for two-way data binding to form elements: ngModel
import { FormsModule } from '@angular/forms';
// importing routermodule and routes module for using different urls for different pages
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ResetPWComponent } from './components/reset-pw/reset-pw.component';
import { RegisterComponent } from './components/register/register.component';

// creating our routes with variable appRoutes 
const appRoutes: Routes = [
    //each route has an object, path
    {path:'', component:LoginComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'resetpassword', component:ResetPWComponent}
  ];

  @NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }