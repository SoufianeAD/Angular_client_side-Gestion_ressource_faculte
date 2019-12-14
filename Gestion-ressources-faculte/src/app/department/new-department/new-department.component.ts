import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-department',
  templateUrl: './new-department.component.html',
  styleUrls: ['./new-department.component.scss']
})
export class NewDepartmentComponent implements OnInit {

  newDepartment: FormGroup;

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.newDepartment = new FormGroup({
      code: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required)
    });
  }

  clear() {
    this.newDepartment.setValue({
      code: '',
      department: '',
    });
  }

  onSubmit() {
    const code = this.newDepartment.get('code').value;
    const department = this.newDepartment.get('department').value;
    console.log(code + ' ' + department);
  }

}
