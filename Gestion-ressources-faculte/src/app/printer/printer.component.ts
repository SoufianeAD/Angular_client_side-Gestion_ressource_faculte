import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {

  printers = [
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon', owner: 'Oussama SIDGUI'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon', owner: 'Oussama SIDGUI'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon', owner: 'Oussama SIDGUI'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon', owner: 'Oussama SIDGUI'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon', owner: 'Oussama SIDGUI'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon', owner: 'Oussama SIDGUI'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
