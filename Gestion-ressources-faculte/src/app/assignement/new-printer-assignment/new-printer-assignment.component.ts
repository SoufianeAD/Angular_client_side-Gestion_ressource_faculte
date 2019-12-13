import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-printer-assignment',
  templateUrl: './new-printer-assignment.component.html',
  styleUrls: ['./new-printer-assignment.component.scss']
})
export class NewPrinterAssignmentComponent implements OnInit {

  printers = [
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon'},
    { brand: 'Canon', speed: '10 ppm', resolution: '600dpi', supplier: 'Canon'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
