import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { UserLogin } from '../models/userlogin.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl:string  = "http://localhost:8080/familytree/user";
  private loginUrl:string  = "http://localhost:8080/familytree/login";
  private header = {
    headers:new HttpHeaders({
        ContentType:'application/json',
        responseType:'text',
        observe:'response'
    })
}
  constructor(
      private htttpClient:HttpClient
    ) { }

public register(newUserLogin:UserLogin){
      console.log(newUserLogin);
      let tempUrl=this.loginUrl + '/add';
      const requestBody = JSON.stringify(newUserLogin);
      return this.htttpClient.post(tempUrl,requestBody,this.header);
  }
  public login(userLogin:UserLogin){
    let tempUrl=this.loginUrl + '/login';
    const requestBody =  JSON.stringify(userLogin);
    console.log(requestBody);
    return this.htttpClient.post(tempUrl,requestBody,this.header);
  }
  public persistSetUser(user:User){
      localStorage.setItem('User', JSON.stringify(user));
  }
  public persistCheckUser(){
      if(localStorage.getItem('User') != null)
          return true;
      else
        return false;
  }
  public persistRemoveUser(){
      localStorage.removeItem('User');
  }
  public persistGetUser(){
    return localStorage.getItem('User');
}
}
