import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-computer',
  templateUrl: './new-computer.component.html',
  styleUrls: ['./new-computer.component.scss']
})
export class NewComputerComponent implements OnInit {

  fournisseurs = [
    { name: 'Lenovo' },
    { name: 'HP'},
    { name: 'Dell'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
