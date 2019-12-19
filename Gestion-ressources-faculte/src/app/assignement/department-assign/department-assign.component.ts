import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-department-assign',
  templateUrl: './department-assign.component.html',
  styleUrls: ['./department-assign.component.scss']
})
export class DepartmentAssignComponent implements OnInit {

  departments = [
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'}
  ];

  constructor(public dialogRef: MatDialogRef<DepartmentAssignComponent>) { }

  ngOnInit() {
  }

  onChoose(codeDepartment: string) {
    console.log('assigned');
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

}
