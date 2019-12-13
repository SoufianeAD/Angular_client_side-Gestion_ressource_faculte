import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-computer-assignment',
  templateUrl: './new-computer-assignment.component.html',
  styleUrls: ['./new-computer-assignment.component.scss']
})
export class NewComputerAssignmentComponent implements OnInit {

  computers = [
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', supplier: 'Lenovo'},
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', supplier: 'Lenovo'},
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', supplier: 'Lenovo'},
    { brand: 'Lenovo', cpu: 'I7', ram: '8GB', storageTech: 'SSD', size: '256GB', supplier: 'Lenovo'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
