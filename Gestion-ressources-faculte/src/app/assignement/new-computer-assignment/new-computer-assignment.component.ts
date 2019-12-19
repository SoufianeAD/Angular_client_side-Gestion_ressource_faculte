import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DepartmentAssignComponent} from '../department-assign/department-assign.component';
import {StaffAssignComponent} from '../staff-assign/staff-assign.component';

@Component({
  selector: 'app-new-computer-assignment',
  templateUrl: './new-computer-assignment.component.html',
  styleUrls: ['./new-computer-assignment.component.scss']
})
export class NewComputerAssignmentComponent implements OnInit {

  computers = [
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', supplier: 'Lenovo'},
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', supplier: 'Lenovo'},
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', supplier: 'Lenovo'},
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', supplier: 'Lenovo'}
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onAssignToDepartment() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.disableClose = false;

    const dialogRef = this.dialog.open(DepartmentAssignComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      () => {
       // this.refresh();
      }
    );
  }

  onAssignToStaff() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.disableClose = false;

    const dialogRef = this.dialog.open(StaffAssignComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      () => {
        // this.refresh();
      }
    );
  }

}
