import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class ScheduleModule { }
