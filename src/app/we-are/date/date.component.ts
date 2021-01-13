import { Component, OnInit } from '@angular/core';
import { weAre } from '../../../assets/info/data';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  data;
  constructor() { 
    this.data = weAre.date;
  }

  ngOnInit(): void {
  }

}
