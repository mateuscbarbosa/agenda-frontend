import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDateComponent } from './select-date.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectDateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    SelectDateComponent
  ]
})
export class SelectDateModule { }
