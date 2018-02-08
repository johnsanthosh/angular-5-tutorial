import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUsernameEmpty = true;
  username = '';

  checkIfUsernameEmpty() {
    if (this.username.length === 0) {
      this.isUsernameEmpty = true;
    } else {
      this.isUsernameEmpty = false;
    }
  }

  resetUsername() {
    this.username = '';
    this.isUsernameEmpty = true;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
