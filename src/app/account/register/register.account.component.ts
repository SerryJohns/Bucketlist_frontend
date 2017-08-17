import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from "angular2-jwt/angular2-jwt";

import { RegisterService } from '../../services/auth/register.service';
import { GetUsersService } from '../../services/auth/get-users.service';

import { User } from '../user';
import { Observable } from "rxjs/Observable";
import { toUser } from '../../services/auth/get-users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.account.component.html',
  styleUrls: ['../account.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(
    private registerService: RegisterService,
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

  private createAccount(): void {
    if (this.model.password != this.model.confirmPassword ){
      this.errMsg = "Passwords don't match!";
      return;
    }
    this.user = toUser(this.model);
    let response: any = this.registerService.register(this.model);
    response.subscribe(
      result => {
        try {
          this.errMsg = result.errMsg;
        } catch (TypeError) {
          this.errMsg = "";
        }
      },
      err => {
        if (err.status === 400) {
          this.errMsg = "Missing required parameters.";
        } else if (err.status === 403) {
          this.errMsg = "User already exists!";
        } else {
          "Server Error!";
        }
      }
    );
  }

}
