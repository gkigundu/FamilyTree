import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserLogin } from '../../models/userlogin.model';
import { Router } from '../../../../node_modules/@angular/router';
import { User } from '../../models/user.model';
import { DTO } from '../../models/dto.model';

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
        console.log("response is " + JSON.stringify(resp));
        console.log(resp.headers);
        this.userService
        let dto = resp.body;
        dto.$setAll(resp.body);
        console.log(dto);
        //console.log("respJSON is " + respJSON)
        if(dto.$status){
          console.log('status is true');
          dto.$status=null;
          dto.$error=null;
            this.userService.persistSet(dto);
            console.log('Start navigating home');
            this.router.navigate(['home']);
            console.log('End navigating home');
        }else{
          console.log('status not true. Status: ' + dto.$status)
          console.log(resp)
        }
        console.log("Exiting registerComponent.register.resp")
      },
      err=>{ 
        console.log("Entering registerComponent.register.err")
          alert("Unable to register!");
          console.log(err);
          console.log("Exitin registerComponent.register.err")
      }
    );
  }
}
