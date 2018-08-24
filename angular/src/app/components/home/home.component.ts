import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { DTO } from '../../models/dto.model';
import { UserLogin } from '../../models/userlogin.model';
import { Family } from '../../models/family.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private dto:DTO;
  private user: User;
  private login:UserLogin;
  private family:Family;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.dto = this.userService.persistGet();
    this.user=this.dto.$user;
    this.family=this.dto.$family;
    this.login=this.dto.$login;
  }

}
