import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Pc} from '../../models/pc.model';
import {RessourceService} from '../../services/RessourceService';

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

  computer: Pc;

  constructor(private resourcesService: RessourceService) { }

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
      processeur: new FormControl(''),
      memoireRAM: new FormControl(''),
      diskDurTech: new FormControl(''),
      diskDurTaille: new FormControl('')
    });
  }

  onOthers(index: number) {
    this.others[index] = true;
  }

  onSubmit() {
    this.computer = new Pc();
    this.computer.marque = this.newComputer.get('brand').value;
    this.computer.fournisseur = this.newComputer.get('supplier').value;
    if ( this.others[0] === true) {
      this.computer.cpu = this.newComputer.get('others0').value;
    } else {
      this.computer.cpu = this.cpu;
    }

    if ( this.others[1] === true) {
      this.computer.ram = this.newComputer.get('others1').value;
    } else {
      this.computer.ram = this.ram;
    }

    if ( this.others[2] === true) {
      this.computer.hardDiskTech = this.newComputer.get('others2').value;
    } else {
      this.computer.hardDiskTech = this.hardDiskTech;
    }

    if ( this.others[3] === true) {
      this.computer.stockage = this.newComputer.get('others3').value;
    } else {
      this.computer.stockage = this.hardDiskSize;
    }

    this.resourcesService.createNewComputer(this.computer);
    console.log(this.computer);
  }

}
