import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule, MatToolbarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/typings/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
  ]
})
export class MaterialModule { }
