import { Component, OnInit } from '@angular/core';
import { weAre } from '../../../assets/info/data';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  data;
  year = [];
  constructor() {
    this.data = weAre.event;
    let aux = this.data.year.split("");
    this.year.push(aux[0]+aux[1]);
    this.year.push(aux[2]+aux[3]);
   }

  ngOnInit(): void {
  }

}
