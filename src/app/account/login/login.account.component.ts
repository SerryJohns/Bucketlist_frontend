import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.account.component.html',
  styleUrls: ['../account.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  private errMsg: any;
  users: User[] = [];
  test: string;

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(): void {
    this.loginService.getUsers()
      .subscribe(
        users => {
          this.users = users;
          users.forEach(user => {
            console.log(user.firstname);
            this.test = user.email;
          });
        },
        error => this.errMsg = error
        );
  }
}
