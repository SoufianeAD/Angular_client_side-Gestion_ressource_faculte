import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-computer-offer-demand',
  templateUrl: './new-computer-offer-demand.component.html',
  styleUrls: ['./new-computer-offer-demand.component.scss']
})
export class NewComputerOfferDemandComponent implements OnInit {

  computers = [
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', quantity: 25},
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', quantity: 25 },
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', quantity: 25 },
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', quantity: 25 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
