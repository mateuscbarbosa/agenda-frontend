import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelectDateService } from '../../select-date/service/select-date.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  currentDate = this.selectDateService.getToday();
  selectedDateShow = false;
  
  constructor(private selectDateService:SelectDateService, private router:Router){}

  selectedDate(){
    this.selectedDateShow = true;
    this.currentDate = this.selectDateService.returnDateSelected();
  }

  
}
