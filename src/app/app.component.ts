import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { currentUser } from './account/currentUser';
import { MdMenuTrigger } from "@angular/material";
import { User } from "./account/user";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    constructor(private authService: AuthService) { }
     @Output()
     @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
     title = 'The Bucketlist';
     currentUser: any;
     userObj: User;

    ngOnInit() {
        this.userObj = currentUser;
        this.currentUser = currentUser.firstname + " " + currentUser.surname;
     }

    someMethod() {
        this.trigger.openMenu();
    }
}
