import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users = [
    { name: 'Oussama SIDGUI', department: 'Informatique', mail: 'SIDGUI@GMAIL.COM'},
    { name: 'Oussama SIDGUI', department: 'Informatique', mail: 'SIDGUI@GMAIL.COM'},
    { name: 'Oussama SIDGUI', department: 'Informatique', mail: 'SIDGUI@GMAIL.COM'},
    { name: 'Oussama SIDGUI', department: 'Informatique', mail: 'SIDGUI@GMAIL.COM'},
    { name: 'Oussama SIDGUI', department: 'Informatique', mail: 'SIDGUI@GMAIL.COM'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
