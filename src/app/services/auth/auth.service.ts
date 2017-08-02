import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor() { }
  
  public isAuthenticated(): boolean {
    return this.isValidToken();
  }

  public isValidToken(): boolean {
    let token: string;
    token = localStorage.getItem('id_token');
    return token && tokenNotExpired ? true: false;
  }

}
