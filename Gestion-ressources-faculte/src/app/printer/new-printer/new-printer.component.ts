import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-printer',
  templateUrl: './new-printer.component.html',
  styleUrls: ['./new-printer.component.scss']
})
export class NewPrinterComponent implements OnInit {

  fournisseurs = [
    { name: 'Lenovo' },
    { name: 'HP'},
    { name: 'Dell'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
