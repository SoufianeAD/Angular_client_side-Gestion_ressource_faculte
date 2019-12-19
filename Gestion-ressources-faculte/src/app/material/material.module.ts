import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule, MatRadioModule, MatTabsModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatRadioModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatRadioModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
