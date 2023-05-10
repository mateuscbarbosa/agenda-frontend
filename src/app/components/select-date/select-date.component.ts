import { Component, OnInit } from '@angular/core';
import { SelectDateService } from './service/select-date.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.component.html',
  styleUrls: ['./select-date.component.css']
})
export class SelectDateComponent implements OnInit{
  
  constructor(private selectDateService: SelectDateService, private formBuilder: FormBuilder){}
  
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
    //alert(this.dateForm.get('selectedDate')?.value);
  }
}
