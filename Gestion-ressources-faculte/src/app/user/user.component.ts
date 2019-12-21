import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import {Subscription} from 'rxjs';
import {UserService} from '../services/UserService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  usersSubscription: Subscription;

  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.usersSubscription = this.usersService.usersSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.usersService.getUsers();
  }

  onDelete(id: number) {
    console.log('user with id : ' + id + ' removed');
  }

}
