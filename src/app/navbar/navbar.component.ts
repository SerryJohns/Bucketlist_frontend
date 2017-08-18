import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MdMenuTrigger } from "@angular/material";
import { AuthService } from "../services/auth/auth.service";
import { User } from "../account/user";
import { currentUser } from "../account/currentUser";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }
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
