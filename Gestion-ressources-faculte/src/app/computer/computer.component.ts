import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

  computers = [
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', supplier: 'Lenovo', owner: 'Oussama SIDGUI'},
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', supplier: 'Lenovo', owner: 'Oussama SIDGUI' },
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', supplier: 'Lenovo', owner: 'Oussama SIDGUI' },
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', supplier: 'Lenovo', owner: 'Oussama SIDGUI' },
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', supplier: 'Lenovo', owner: 'Oussama SIDGUI' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
