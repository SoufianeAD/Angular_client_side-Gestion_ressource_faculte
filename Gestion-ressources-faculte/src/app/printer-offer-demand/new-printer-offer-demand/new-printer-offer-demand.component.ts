import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-printer-offer-demand',
  templateUrl: './new-printer-offer-demand.component.html',
  styleUrls: ['./new-printer-offer-demand.component.scss']
})
export class NewPrinterOfferDemandComponent implements OnInit {

  printers = [
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon', quantity: 15},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon', quantity: 15},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon', quantity: 15},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon', quantity: 15},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon', quantity: 15}
  ];

  constructor() { }

  ngOnInit() {
  }

}
