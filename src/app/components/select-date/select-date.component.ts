import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectDateService } from './service/select-date.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.component.html',
  styleUrls: ['./select-date.component.css']
})
export class SelectDateComponent implements OnInit{ 
  constructor(private selectDateService: SelectDateService, private formBuilder: FormBuilder, private router: Router){}
  
  dateForm!: FormGroup;
  
  ngOnInit(): void {
    this.dateForm = this.formBuilder.group({
      selectedDate: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  selectDate(){
    this.selectDateService.setDate(this.dateForm.get('selectedDate')?.value);
    this.selectDateService.setSelectedDateDisplay(false);
  }

  cancel(){
    this.selectDateService.setDate(new Date());
    this.selectDateService.setSelectedDateDisplay(false);
  }
}
