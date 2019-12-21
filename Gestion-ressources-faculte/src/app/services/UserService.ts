import {Observable, Subject} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../models/user.model';


@Injectable()
export  class UserService {
  constructor(private  http: HttpClient) {}

  private users: User[] = [];
  usersSubject = new Subject<User[]>() ;


  emitUserSubject() {
    this.usersSubject.next(this.users);
  }

  addUser(user: User): Observable<boolean> {
    this.users.push(user);
    this.emitUserSubject();
    return this.http.post<boolean>('http://localhost:8080/AddUser', user);
  }

  private getUsersSubject() {
    this.http.get<User[]>('http://localhost:8080/Users').subscribe(
      (data) => {
        this.users = data;
        this.emitUserSubject();
      }
    );
  }
  getUsers() {
    this.getUsersSubject();
    return this.users;
  }

}
