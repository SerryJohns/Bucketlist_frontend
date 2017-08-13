import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'ng2-modal';

import { routing, appRoutingProviders } from './app.route';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './account/login/login.account.component';
import { RegisterComponent } from './account/register/register.account.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { ItemComponent } from './item/item.component';
import { CreateBucketlistComponent } from './bucketlist/create-bucketlist/create-bucketlist.component';
import { EditBucketlistComponent } from './bucketlist/edit-bucketlist/edit-bucketlist.component';


import { LoginService } from './services/auth/login.service';
import { RegisterService } from './services/auth/register.service';
import { GetUsersService } from './services/auth/get-users.service';
import { BucketlistService } from './services/bucketlist/bucketlist.service';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    BucketlistComponent,
    ItemComponent,
    CreateBucketlistComponent,
    EditBucketlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModalModule
      ],
  providers: [
    AuthService,
    AuthGuard,
    appRoutingProviders,
    LoginService,
    RegisterService,
    GetUsersService,
    BucketlistService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
