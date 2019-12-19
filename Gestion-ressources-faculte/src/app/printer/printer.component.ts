import { Component, OnInit } from '@angular/core';
import {Printer} from '../models/printer.model';
import {Subscription} from 'rxjs';
import {RessourceService} from '../services/RessourceService';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {

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
