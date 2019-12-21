import { Component, OnInit } from '@angular/core';
import {Pc} from '../../models/pc.model';
import {Subscription} from 'rxjs';
import {RessourceService} from '../../services/RessourceService';

@Component({
  selector: 'app-computer-breakdown',
  templateUrl: './computer-breakdown.component.html',
  styleUrls: ['./computer-breakdown.component.scss']
})
export class ComputerBreakdownComponent implements OnInit {

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
