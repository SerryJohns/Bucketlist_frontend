import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';

import { routing, appRoutingProviders } from './app.route';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './account/login/login.account.component';
import { RegisterComponent } from './account/register/register.account.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';

import { LoginService } from './services/auth/login.service';
import { RegisterService } from './services/auth/register.service';
import { GetUsersService } from './services/auth/get-users.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    BucketlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
      ],
  providers: [
    // AUTH_PROVIDERS,
    AuthService,
    AuthGuard,
    appRoutingProviders,
    LoginService,
    RegisterService,
    GetUsersService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
