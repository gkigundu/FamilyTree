import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importing FormsModule for two-way data binding to form elements: ngModel
import { FormsModule } from '@angular/forms';
// importing routermodule and routes module for using different urls for different pages
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ResetPWComponent } from './components/reset-pw/reset-pw.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ResetPWComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
