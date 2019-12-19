import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  listRole: string[] = ['Fournisseur', 'Interne'];
  role: string;

  login: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {

  }

  onSignup() {
    if (this.role === 'Interne') {
      this.router.navigate(['new-user']);
    } else if (this.role === 'Fournisseur') {
      this.router.navigate(['sign-up-supplier']);
    }
  }

}
