import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserLogin } from '../../models/userlogin.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private username:string;
  private password:string;
  private email:string;
  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
  }
  public register(){
    let userLogin: UserLogin = new UserLogin();
    userLogin.$email=this.email;
    userLogin.$username=this.username;
    userLogin.$password=this.password;
    this.userService.register(userLogin);
  }
}
