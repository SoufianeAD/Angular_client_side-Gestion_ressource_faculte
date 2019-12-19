import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-printer-need',
  templateUrl: './new-printer-need.component.html',
  styleUrls: ['./new-printer-need.component.scss']
})
export class NewPrinterNeedComponent implements OnInit {

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

}
