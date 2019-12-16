import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-breakdown',
  templateUrl: './new-breakdown.component.html',
  styleUrls: ['./new-breakdown.component.scss']
})
export class NewBreakdownComponent implements OnInit {

  breakDownType: string;
  listBreakDownType: string[] = ['Ordinateur', 'Imprimante'];
  frequence: string;
  listFrequence: string[] = ['Rare', 'Fréquente', 'Permanente']

  typesPanne = ['Materiel', 'Logicielle'];



  constructor() { }

  ngOnInit() {
  }

}
