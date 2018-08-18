import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private auth: AuthService
  ) { }
  validate(username:string, password:string){
    if(username=='johne' && password =='vang'){
      this.auth.setToken('helloWorld');
      return true;
    }
    return false;
  }
}
