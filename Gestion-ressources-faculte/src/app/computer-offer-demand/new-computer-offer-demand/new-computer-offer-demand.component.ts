import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-computer-offer-demand',
  templateUrl: './new-computer-offer-demand.component.html',
  styleUrls: ['./new-computer-offer-demand.component.scss']
})
export class NewComputerOfferDemandComponent implements OnInit {

  cart = false;

  listCPU: string[] = ['I3', 'I5', 'I7'];
  cpu: string;
  listRAM: string[] = ['4GB', '8GB', '16GB'];
  ram: string;
  listHardDiskTech: string[] = ['HDD', 'SSD'];
  hardDiskTech: string;
  listHardDiskSize: string[] = ['256GB', '512GB', '1To'];
  hardDiskSize: string;
  others = [false, false, false, false];

  computers = [
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', quantity: 25},
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', quantity: 25 },
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', quantity: 25 },
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', quantity: 25 }
  ];

  constructor() { }

  ngOnInit() {
  }

  onOpenCart() {
    this.cart = true;
  }

  onOthers(index: number) {
    this.others[index] = true;
  }

}
