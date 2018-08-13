import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  hobbies: string[];
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit ran');

    this.firstName = 'No';
    this.lastName = 'One';
    this.email = 'noone@email.com';
    this.hobbies = [
      'Programming',
      'Eat',
      'Sleep'
    ];
  }

  onClick() {
    console.log('onClick ran');
    this.firstName = 'hehe';
  }

  // add hobby to beginning of array
  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    console.log(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for(let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
    
    console.log(hobby);
  }
}

// interface User {
//   firstName: string,
//   lastName: string,
//   hobbies: string[]
// }