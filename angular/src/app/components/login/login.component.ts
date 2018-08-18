import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import { UserLogin } from '../../models/userlogin.model';
import {User} from '../../models/user.model';

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
    this.userService.login(userLogin).subscribe(
      resp=>{
        let respJSON = JSON.parse(resp['body']);
        if(resp['status'] == 202){
            //user successfully logged in
            //storing data in cache obserable
            let newUser = new User();
            newUser.$setAll(respJSON);
            this.userService.persistSetUser(newUser);
            this.router.navigate(['home']);
        }
    },
    err=>{
        alert("Wrong Password!");
        console.log(err.status);
    });
  }

}
