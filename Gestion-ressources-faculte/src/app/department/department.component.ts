import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departments = [
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
