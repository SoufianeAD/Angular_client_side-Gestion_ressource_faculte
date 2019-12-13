import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  suppliers = [
    { name: 'Lenovo', phone: '066666666666', mail: 'Lenovo@gmail.com'},
    { name: 'Lenovo', phone: '066666666666', mail: 'Lenovo@gmail.com'},
    { name: 'Lenovo', phone: '066666666666', mail: 'Lenovo@gmail.com'},
    { name: 'Lenovo', phone: '066666666666', mail: 'Lenovo@gmail.com'},
    { name: 'Lenovo', phone: '066666666666', mail: 'Lenovo@gmail.com'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
