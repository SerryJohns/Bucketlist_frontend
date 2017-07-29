import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router) { }

  displayLogin = false;
  displayRegister = false;

  ngOnInit() {
    console.log(this.router.url);
    if (this.router.url === "/login") {
      this.displayLogin = true;
    } else if (this.router.url === "/register") {
      this.displayRegister = true;
    }
  }

}
