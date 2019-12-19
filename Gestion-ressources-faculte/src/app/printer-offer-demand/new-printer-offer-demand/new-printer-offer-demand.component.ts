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

  cart = false;

  listSpeed: string[] = ['1 ipm', '10 ppm', '18 ppm'];
  speed: string;
  listResolution: string[] = ['300 dpi', '600 dpi', 'ppp'];
  resolution: string;
  others = [false, false];

  constructor() { }

  ngOnInit() {
  }

  onOthers(index: number) {
    this.others[index] = true;
  }

  onOpenCart() {
    this.cart = true;
  }


}
