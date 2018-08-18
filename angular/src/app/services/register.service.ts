import { Injectable } from '@angular/core';
import { UserLogin } from '../models/userlogin.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }
  register(newLogin:UserLogin){
    console.log(newLogin);
      const requestBody = JSON.stringify(newLogin);
      console.log(requestBody);
  }
}
