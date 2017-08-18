import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'ng2-modal';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
import { CreateItemComponent } from './item/create-item/create-item.component';
import { EditItemComponent } from './item/edit-item/edit-item.component';
import { BucketlistSearchComponent } from './bucketlist-search/bucketlist-search.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import {
  MaterialModule,
  MdDialogModule, 
  MdMenuModule, 
  MdButtonModule,
  MdInputModule,
  MdCardModule
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';

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
    EditBucketlistComponent,
    CreateItemComponent,
    EditItemComponent,
    BucketlistSearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModalModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdMenuModule,
    MdDialogModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule
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
