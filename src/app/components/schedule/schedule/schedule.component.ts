import { Component } from '@angular/core';
import { SelectDateModule } from '../../select-date/select-date.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  currentDate = new Date();
  selectedDateShow = false;

  constructor(private router:Router){}

  selectedDate(){
    this.selectedDateShow = true;
  }
}
