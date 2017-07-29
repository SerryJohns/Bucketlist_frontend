import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routing } from './app.route';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './account/login/login.account.component';
import { RegisterComponent } from './account/register/register.account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
      ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
