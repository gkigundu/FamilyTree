import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import { UserLogin } from '../../models/userlogin.model';
import {User} from '../../models/user.model';
import { DTO } from '../../models/dto.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username:string;
  private password:string;
  constructor(
    private router:Router,
    private auth: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {  }

  login() {
    let userLogin: UserLogin = new UserLogin();
    userLogin.$username=this.username;
    userLogin.$password=this.password;
    this.userService.login(userLogin).subscribe(
      resp=>{
        console.log("Entering loginComponent.login.resp")
        console.log("response is " + JSON.stringify(resp));
        console.log(resp);
        let dto = new DTO();
        dto.$setAll(resp);
        console.log(dto);
        if(dto.$status){
          console.log('status is true');
          resp.$status=null;
          resp.$error=null;
            this.userService.persistSet(resp);
            console.log('Start navigating home');
            this.router.navigate(['home']);
            console.log('End navigating home');
        }else{
          console.log('status not true. Status:' + resp.$status);
          console.log(resp)
        }
        console.log("Exiting loginComponent.login.resp")
    },
    err=>{
        alert("Wrong Password!");
        console.log(err);
    });
  }

}
