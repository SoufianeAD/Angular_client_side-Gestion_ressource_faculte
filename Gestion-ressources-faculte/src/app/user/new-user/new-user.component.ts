import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  newUser: FormGroup;
  departments = [
    { name: 'Comptabilité'},
    { name: 'Marketing et Commercialisation'},
    { name: 'Ressources Humaines'}
  ];

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.newUser = new FormGroup({
      name: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  clear() {
    this.newUser.setValue({
      name: '',
      email: '',
      department: this.departments[0].name,
      password: '',
      confirmPassword: ''
    });
  }

  onSubmit() {
    const name = this.newUser.get('name').value;
    const department = this.newUser.get('department').value;
    const email = this.newUser.get('email').value;
    const password = this.newUser.get('password').value;
    const confirmPassword = this.newUser.get('confirmPassword').value;

    if (password !== confirmPassword ) {
      console.log('ERROR : password mismatch');
    } else {
      console.log(name + ' ' + department + ' ' + email + ' ' + password + ' ' + confirmPassword);
      this.clear();
    }
  }

}
