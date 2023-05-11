import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectDateService {

  constructor() { }

  private selectedDate!: Date;
  private selectedDateDisplay!: boolean;

  getToday(): Date{
    return new Date();
  }

  setDate(date: Date){
    this.selectedDate=date;
  }

  returnDateSelected(): Date{
    return this.selectedDate;
  }

  getSelectedDateDisplay(): boolean{
    return this.selectedDateDisplay;
  }

  setSelectedDateDisplay(display: boolean){
    this.selectedDateDisplay = display;
  }
}
