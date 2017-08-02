import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  private model: {
    username: "serry",
    password: "pass"
  }
  user: User;

  ngOnInit() {
    
  }

  private login() {
    let response: any;
    response = this.loginService.login({ username: "serry", password: "pass"});
    response.subscribe(
      result => {
        this.user = result.data? toUser(result.data): null;
        if (this.user){
          localStorage.setItem(
          'currentUser', JSON.stringify(this.user)
          );
          localStorage.setItem(
            'id_token', JSON.stringify(result.auth_token)
          
          );
          this.router.navigate(['bucketlist']);
        } else {
          this.errMsg = "Sorry! Some error occurred!";
        }
      },
      err => {
        console.log(err);
        if (err.status == 403) {
          this.errMsg = "Invalid username or password!";
        } else if (err.status == 400) {
          this.errMsg = "Username and password required!";
        } else {
          this.errMsg = JSON.stringify(err);
        }
      }
    )
  }

}
