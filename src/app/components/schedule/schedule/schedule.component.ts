import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelectDateService } from '../../select-date/service/select-date.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent{

  currentDate = this.selectDateService.getToday();

  constructor(private selectDateService:SelectDateService, private router:Router){}
   
  selectedDate(){
    this.selectDateService.setSelectedDateDisplay(true);
    this.currentDate = this.selectDateService.returnDateSelected();
  }
  
  display():string{
    if(this.selectDateService.getSelectedDateDisplay()){
      return "showSelectDate";
    }
    else{
      return "hideSelectDate";
    }
    
  }
}
