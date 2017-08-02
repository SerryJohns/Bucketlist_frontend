import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }
  
  public isAuthenticated(): boolean {
    return this.isValidToken();
  }

  public isValidToken(): boolean {
    let token: string;
    token = localStorage.getItem('id_token');
    return token && tokenNotExpired ? true: false;
  }

  public logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

}
