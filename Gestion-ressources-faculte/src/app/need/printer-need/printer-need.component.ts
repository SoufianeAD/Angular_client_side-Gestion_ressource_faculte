import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printer-need',
  templateUrl: './printer-need.component.html',
  styleUrls: ['./printer-need.component.scss']
})
export class PrinterNeedComponent implements OnInit {

  printerNeeds = [
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', owner: 'Oussama SIDGUI'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', owner: 'Oussama SIDGUI'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', owner: 'Oussama SIDGUI'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', owner: 'Oussama SIDGUI'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', owner: 'Oussama SIDGUI'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', owner: 'Oussama SIDGUI'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', owner: 'Oussama SIDGUI'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
