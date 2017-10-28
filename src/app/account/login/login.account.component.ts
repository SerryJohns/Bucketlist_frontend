import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { tokenNotExpired } from "angular2-jwt/angular2-jwt";

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
    private loginService: LoginService,
    private router: Router
    ) { }

  private errMsg: string;
  private model: any = { }
  user: User;

  ngOnInit() {
    if (tokenNotExpired) {
      this.router.navigate(['bucketlists']);
    }
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
        this.router.navigate(['bucketlists']);
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
