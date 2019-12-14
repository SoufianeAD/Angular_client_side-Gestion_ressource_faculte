import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-supplier',
  templateUrl: './sign-up-supplier.component.html',
  styleUrls: ['./sign-up-supplier.component.scss']
})
export class SignUpSupplierComponent implements OnInit {

  newSupplier: FormGroup;

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.newSupplier = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  clear() {
    this.newSupplier.setValue({
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  onSubmit() {
    const name = this.newSupplier.get('name').value;
    const phone = this.newSupplier.get('phone').value;
    const email = this.newSupplier.get('email').value;
    const password = this.newSupplier.get('password').value;
    const confirmPassword = this.newSupplier.get('confirmPassword').value;

    if (password !== confirmPassword) {
      console.log('ERROR : password mismatch');
    } else {
      console.log(name + ' ' + phone + ' ' + email + ' ' + password + ' ' + confirmPassword);
    }
  }
}
