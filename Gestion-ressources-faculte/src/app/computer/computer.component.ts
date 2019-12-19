import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Pc} from '../models/pc.model';
import {RessourceService} from '../services/RessourceService';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

  computers: Pc[] = [];
  computersSubscription: Subscription;


  constructor(private resourcesService: RessourceService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.computersSubscription = this.resourcesService.pcSubject.subscribe(
      (computers: Pc[]) => {
        this.computers = computers;
      }
    );
    this.resourcesService.getAllComputers();
    this.resourcesService.emitPcSubject();
  }

}
