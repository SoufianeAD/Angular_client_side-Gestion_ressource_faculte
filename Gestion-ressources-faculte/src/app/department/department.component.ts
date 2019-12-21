import { Component, OnInit } from '@angular/core';
import {Departement} from '../models/departement.model';
import {DepartementService} from '../services/DepartementService';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departments = [
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'},
    { code: 'B01', title: 'Informatique'}
  ];

  listDepartemet: Departement[]= [];
  constructor(private depService: DepartementService) { }

  ngOnInit() {
    this.listDepartemet = this.depService.getAllDep();
  }

}
