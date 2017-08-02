import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/auth/login.service';
import { GetUsersService } from '../../services/auth/get-users.service';

import { User } from '../user';
import { Observable } from "rxjs/Observable";
import { toUser } from '../../services/auth/get-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.account.component.html',
  styleUrls: ['../account.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService
    ) { }

  private errMsg: string;
  private model: any = { }
  user: User;

  ngOnInit() {
    
  }

  private login(): void {
    let response: any = this.loginService.login(this.model);
    response.subscribe(
      result => {
        try {
          this.errMsg = result.errMsg;
        } catch (TypeError) {
          this.errMsg = "";
        }
      },
      err => {
        if (err.status === 403) {
          this.errMsg = "Invalid username or password!";
        } else if (err.status === 400) {
          this.errMsg = "Username and password required!";
        } else {
          this.errMsg = "Server Error!";
        }
      }
    );
  }

}
