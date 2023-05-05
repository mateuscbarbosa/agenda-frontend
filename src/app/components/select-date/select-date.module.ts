import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDateComponent } from './select-date.component';



@NgModule({
  declarations: [
    SelectDateComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SelectDateComponent
  ]
})
export class SelectDateModule { }
