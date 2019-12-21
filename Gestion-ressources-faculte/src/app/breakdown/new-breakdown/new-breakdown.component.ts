import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {StaffAssignComponent} from '../../assignement/staff-assign/staff-assign.component';
import {ComputerComponent} from '../../computer/computer.component';
import {PrinterComponent} from '../../printer/printer.component';
import {ComputerBreakdownComponent} from '../computer-breakdown/computer-breakdown.component';
import {PrinterBreakdownComponent} from '../printer-breakdown/printer-breakdown.component';
import {ConstatService} from '../../services/ConstatService';

@Component({
  selector: 'app-new-breakdown',
  templateUrl: './new-breakdown.component.html',
  styleUrls: ['./new-breakdown.component.scss']
})
export class NewBreakdownComponent implements OnInit {

  breakdownResourceType: string;
  listBreakDownType: string[] = ['Ordinateur', 'Imprimante'];
  frequence: string;
  listFrequence: string[] = ['Rare', 'Fréquente', 'Permanente'];

  typesPanne = ['Materiel', 'Logicielle'];
  breakdownForm: FormGroup;



  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.breakdownForm = new FormGroup({
      breakdownMaterial: new FormControl(''),
      breakdownType: new FormControl(''),
      breakdownFrequence: new FormControl(''),
      breakdownDate: new FormControl(''),
      breakdownDescription: new FormControl('')
    });
  }

  onSelectResource() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.width = '60%';
      dialogConfig.disableClose = false;
      if (this.breakdownResourceType === 'Ordinateur') {
        const dialogRef = this.dialog.open(ComputerBreakdownComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
          () => {
            // this.refresh();
          }
        );
      } else if (this.breakdownResourceType === 'Imprimante') {
        const dialogRef = this.dialog.open(PrinterBreakdownComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
          () => {
            // this.refresh();
          }
        );
    }
  }

  onSubmit() {
  }

}
