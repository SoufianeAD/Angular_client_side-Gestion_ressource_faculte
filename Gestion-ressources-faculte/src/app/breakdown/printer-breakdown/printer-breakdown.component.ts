import { Component, OnInit } from '@angular/core';
import {Printer} from '../../models/printer.model';
import {Subscription} from 'rxjs';
import {RessourceService} from '../../services/RessourceService';

@Component({
  selector: 'app-printer-breakdown',
  templateUrl: './printer-breakdown.component.html',
  styleUrls: ['./printer-breakdown.component.scss']
})
export class PrinterBreakdownComponent implements OnInit {

  printers: Printer[] = [];
  printersSubscription: Subscription;

  constructor(private resourcesService: RessourceService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.printersSubscription = this.resourcesService.printerSubject.subscribe(
      (printers: Printer[]) => {
        this.printers = printers;
      }
    );
    this.resourcesService.getAllPrinter();
  }

}
