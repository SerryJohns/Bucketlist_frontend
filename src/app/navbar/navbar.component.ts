import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MdMenuTrigger } from "@angular/material";
import { AuthService } from "../services/auth/auth.service";
import { User } from "../account/user";
import { currentUser } from "../account/currentUser";
import { MdDialog, MdDialogRef } from '@angular/material';
import { CreateBucketlistComponent } from "../bucketlist/create-bucketlist/create-bucketlist.component";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private dialog: MdDialog
        ) { }

    title = 'The Bucketlist';
    currentUser: any;
    userObj: User;
    dialogRef: MdDialogRef<CreateBucketlistComponent>;

    ngOnInit() {
        this.userObj = currentUser;
        this.currentUser = currentUser.firstname + " " + currentUser.surname;
     }

    private createBucketlist(){
        this.dialogRef = this.dialog.open(CreateBucketlistComponent, {
            width: '600px'
        });
        this.dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }

}
