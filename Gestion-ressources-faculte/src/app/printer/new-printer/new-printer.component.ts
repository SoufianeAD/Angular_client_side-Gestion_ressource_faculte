import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-printer',
  templateUrl: './new-printer.component.html',
  styleUrls: ['./new-printer.component.scss']
})
export class NewPrinterComponent implements OnInit {

  listSpeed: string[] = ['1 ipm', '10 ppm', '18 ppm'];
  speed: string;
  listResolution: string[] = ['300 dpi', '600 dpi', 'ppp'];
  resolution: string;
  others = [false, false];

  fournisseurs = [
    { name: 'Lenovo' },
    { name: 'HP'},
    { name: 'Dell'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onOthers(index: number) {
    this.others[index] = true;
  }

}
