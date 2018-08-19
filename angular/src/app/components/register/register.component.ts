import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserLogin } from '../../models/userlogin.model';
import { Router } from '../../../../node_modules/@angular/router';
import { User } from '../../models/user.model';

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
    private userService:UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  public register(){
    let userLogin: UserLogin = new UserLogin();
    userLogin.$email=this.email;
    userLogin.$username=this.username;
    userLogin.$password=this.password;
    this.userService.register(userLogin).subscribe(
      resp=>{
        console.log("Entering registerComponent.register.resp")
        let respJSON = JSON.parse(resp['body']);
        console.log("respJSON is " + respJSON)
        if(resp['status'] == 202){
            let newUser = new User();
            newUser.$setAll(respJSON);
            this.userService.persistSetUser(newUser);
            this.router.navigate(['home']);
        }
        console.log("Exiting registerComponent.register.resp")
      },
      err=>{
        console.log("Entering registerComponent.register.err")
          alert("Unable to register!");
          console.log(err.status);
          console.log("Exitin registerComponent.register.err")
      }
    );
  }
}
