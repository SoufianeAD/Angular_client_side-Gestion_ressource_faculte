import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
