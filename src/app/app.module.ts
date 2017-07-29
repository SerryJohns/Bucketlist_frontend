import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';
import { routing } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    FooterComponent
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
