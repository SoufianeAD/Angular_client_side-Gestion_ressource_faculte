import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-constat',
  templateUrl: './new-constat.component.html',
  styleUrls: ['./new-constat.component.scss']
})
export class NewConstatComponent implements OnInit {

  users = [
    {name: 'Soufiane'},
    {name: 'Oussama'},
    {name: 'Mehdi'},
    {name: 'Mohammed'}
    ];

  typesPanne = [
    {type: 'materiel'},
    {type: 'logiciel'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
