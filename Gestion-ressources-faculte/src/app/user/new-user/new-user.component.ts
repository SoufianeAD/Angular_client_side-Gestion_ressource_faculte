import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  departments = [
    { name: 'Comptabilité'},
    { name: 'Marketing et Commercialisation'},
    { name: 'Ressources Humaines'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
