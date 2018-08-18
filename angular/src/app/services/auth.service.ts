import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Token } from '../../../node_modules/@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }
  setToken(newToken:string){
    localStorage.setItem('Token',newToken);
  }

  getToken():string{
    console.log(localStorage.getItem('Token'));
    return localStorage.getItem('Token');
  }
  deleteToken(){
    localStorage.removeItem('Token');
  }
  appendToken(url:string):string{
    return url + "?token=" +this.getToken();
  }
  checkToken():boolean{
    if(this.getToken() != null){
      console.log('token not null');
        return true;
    }
    else
        return false;
}
}
