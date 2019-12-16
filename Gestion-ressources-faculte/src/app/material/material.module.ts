import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule, MatTabsModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatRadioModule
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
