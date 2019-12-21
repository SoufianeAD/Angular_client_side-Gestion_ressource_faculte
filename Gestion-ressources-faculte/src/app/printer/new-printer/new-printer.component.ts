import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Printer} from '../../models/printer.model';
import {RessourceService} from '../../services/RessourceService';

@Component({
  selector: 'app-new-printer',
  templateUrl: './new-printer.component.html',
  styleUrls: ['./new-printer.component.scss']
})
export class NewPrinterComponent implements OnInit {

  listSpeed: string[] = ['1 ipm', '10 ppm', '18 ppm'];
  speed: string;
  listResolution: string[] = ['300 dpi', '600 dpi', 'ppp'];
  resolution: string;
  others = [false, false];

  fournisseurs = [
    { name: 'Lenovo' },
    { name: 'HP'},
    { name: 'Dell'}
  ];

  newPrinterForm: FormGroup;
  printer: Printer;

  constructor(private resourcesService: RessourceService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.newPrinterForm = new FormGroup({
      brand: new FormControl('', Validators.required),
      others0: new FormControl(''),
      others1: new FormControl(''),
      supplier: new FormControl('', Validators.required),
      speedPrinter: new FormControl(''),
      resolutionPrinter: new FormControl('')
    });
  }

  onOthers(index: number) {
    this.others[index] = true;
  }

  onSubmit() {
    this.printer = new Printer();
    this.printer.marque = this.newPrinterForm.get('brand').value;
   // this.printer.fournisseur = this.newPrinterForm.get('supplier').value;

    if ( this.others[0] === true) {
      this.printer.vitesse = this.newPrinterForm.get('others0').value;
    } else {
      this.printer.vitesse = this.speed;
    }

    if ( this.others[1] === true) {
      this.printer.resolution = this.newPrinterForm.get('others1').value;
    } else {
      this.printer.resolution = this.resolution;
    }

    this.resourcesService.createNewPrinter(this.printer);
    console.log(this.printer);

  }

}
