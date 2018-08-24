import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { UserLogin } from '../models/userlogin.model';
import { Observable } from '../../../node_modules/rxjs';
import { DTO } from '../models/dto.model';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dto:DTO;
  private userUrl:string  = "http://localhost:8080/familytree/user";
  private loginUrl:string  = "http://localhost:8080/familytree/login";

  private header = {
    headers:new HttpHeaders({
        ContentType:'application/json',
        responseType:'application/json'
        
    })}
    private headers = {
        headers:this.header,
        observe: 'response'
    };
    constructor(
      private htttpClient:HttpClient,
      private authServ:AuthService
    ) { }

public register(newUserLogin:UserLogin):Observable<HttpResponse<DTO>>{
    console.log("Entering userService.register");
      console.log(newUserLogin);
      let tempUrl=this.loginUrl + '/register';
      const requestBody = newUserLogin;
      console.log("Exiting userService.register")
      return this.htttpClient.post<HttpResponse<any>>(tempUrl,requestBody,{headers:this.header});
  }
  public login(userLogin:UserLogin):Observable<DTO>{
    console.log("Entering userService.login");
    let tempUrl=this.loginUrl + '/login';
    const requestBody =  userLogin;
    console.log("Exiting userService.login")
    return this.htttpClient.post<DTO>(tempUrl,requestBody,this.header);
  }
  public persistSet(dto:DTO):void{
      localStorage.setItem('DTO', JSON.stringify(dto));
      this.authServ.setToken('token')
  }
  public persistCheckUser():boolean{
      if(localStorage.getItem('DTO') != null)
          return true;
      else
        return false;
  }
  public persistRemove():void{
      localStorage.removeItem('DTO');
      this.authServ.deleteToken();
  }
  public persistGet():DTO{
    return JSON.parse(localStorage.getItem('DTO'));
  }
}
