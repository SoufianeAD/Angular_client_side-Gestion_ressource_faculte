import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-computer-need',
  templateUrl: './new-computer-need.component.html',
  styleUrls: ['./new-computer-need.component.scss']
})
export class NewComputerNeedComponent implements OnInit {

  listCPU: string[] = ['I3', 'I5', 'I7'];
  cpu: string;
  listRAM: string[] = ['4GB', '8GB', '16GB'];
  ram: string;
  listHardDiskTech: string[] = ['HDD', 'SSD'];
  hardDiskTech: string;
  listHardDiskSize: string[] = ['256GB', '512GB', '1To'];
  hardDiskSize: string;
  others = [false, false, false, false];

  constructor() { }

  ngOnInit() {
  }

  onOthers(index: number) {
    this.others[index] = true;
  }

}
