import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import{ AuthGuardService} from './services/auth-guard.service';
import{ AuthRedirectService} from './services/auth-redirect.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ResetPWComponent } from './components/reset-pw/reset-pw.component';
import { RegisterComponent } from './components/register/register.component';

// creating our routes 
const appRoutes: Routes = [
    //each route has an object, path
    {path:'', component:LoginComponent,canActivate:[AuthRedirectService]},
    {path:'login', component:LoginComponent,canActivate:[AuthRedirectService]},
    {path:'register',  component:RegisterComponent,canActivate:[AuthRedirectService]},
    {path:'forgotpassword', component:ResetPWComponent},
    {path:'home', component:HomeComponent, canActivate:[AuthGuardService]}
  ];

  @NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }