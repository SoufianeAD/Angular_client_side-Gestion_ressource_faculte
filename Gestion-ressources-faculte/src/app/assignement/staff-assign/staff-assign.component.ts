import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-assign',
  templateUrl: './staff-assign.component.html',
  styleUrls: ['./staff-assign.component.scss']
})
export class StaffAssignComponent implements OnInit {

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
