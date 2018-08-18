import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(this.userService.persistGetUser());
  }

}
