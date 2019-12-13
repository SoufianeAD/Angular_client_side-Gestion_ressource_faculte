import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer-need',
  templateUrl: './computer-need.component.html',
  styleUrls: ['./computer-need.component.scss']
})
export class ComputerNeedComponent implements OnInit {

  computerNeeds = [
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', owner: 'Oussama SIDGUI'},
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', owner: 'Oussama SIDGUI'},
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', owner: 'Oussama SIDGUI'},
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', owner: 'Oussama SIDGUI'},
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', owner: 'Oussama SIDGUI'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
