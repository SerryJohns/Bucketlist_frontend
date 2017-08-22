import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

declare var AuthLock

@Injectable()
export class AuthGuard implements CanActivate {

  constructor( 
      private authservice: AuthService,
      private router: Router
      ) { }
  
  canActivate() {
    if (!this.authservice.isAuthenticated()) {
        if (this.router.url === '/register') {
            this.router.navigate(['register']);
        } else {
            this.router.navigate(['login']);
        }
    } else {
        return true;
    }
  }
  
  isActive() {
      return false;
  }

}
