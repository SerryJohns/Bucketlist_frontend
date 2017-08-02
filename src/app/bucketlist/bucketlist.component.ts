import { Component, OnInit } from '@angular/core';

import { AuthService } from './../services/auth/auth.service';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
