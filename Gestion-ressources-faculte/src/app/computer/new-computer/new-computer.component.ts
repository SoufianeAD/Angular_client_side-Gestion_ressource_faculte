import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-computer',
  templateUrl: './new-computer.component.html',
  styleUrls: ['./new-computer.component.scss']
})
export class NewComputerComponent implements OnInit {

  newComputer: FormGroup;
  listCPU: string[] = ['I3', 'I5', 'I7'];
  cpu: string;
  listRAM: string[] = ['4GB', '8GB', '16GB'];
  ram: string;
  listHardDiskTech: string[] = ['HDD', 'SSD'];
  hardDiskTech: string;
  listHardDiskSize: string[] = ['256GB', '512GB', '1To'];
  hardDiskSize: string;
  others = [false, false, false, false];

  fournisseurs = [
    { name: 'Lenovo' },
    { name: 'HP'},
    { name: 'Dell'}
  ];

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.newComputer = new FormGroup({
      brand: new FormControl('', Validators.required),
      others0: new FormControl(''),
      others1: new FormControl(''),
      others2: new FormControl(''),
      others3: new FormControl(''),
      supplier: new FormControl('', Validators.required),
    });
  }

  onOthers(index: number) {
    this.others[index] = true;
  }

}
