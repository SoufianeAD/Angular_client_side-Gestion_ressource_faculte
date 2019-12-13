import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-breakdown',
  templateUrl: './new-breakdown.component.html',
  styleUrls: ['./new-breakdown.component.scss']
})
export class NewBreakdownComponent implements OnInit {

  typesPanne = [
    {type: 'materiel'},
    {type: 'logiciel'}
  ];



  constructor() { }

  ngOnInit() {
  }

}
