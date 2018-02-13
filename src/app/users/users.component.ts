import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';

import { pull } from 'lodash';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  userList;
  constructor(private Users: UsersService) { }

  ngOnInit() {

    this.Users.userList.subscribe(userList => this.userList = userList);
  }

  deleteUser(user): void {
    this.Users.deleteUser( user );
  }

  searchEvent($event){
    /* search callback will be here */
  }
}