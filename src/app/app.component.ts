import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { currentUser } from './account/currentUser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    constructor(private authService: AuthService) { }
     title = 'The Bucketlist';
     currentUser: any;

    ngOnInit() {
        this.currentUser = currentUser.firstname + " " + currentUser.surname;
     }
}
