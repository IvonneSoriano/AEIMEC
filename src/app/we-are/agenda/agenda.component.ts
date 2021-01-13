import { Component, OnInit } from '@angular/core';
import { weAre } from '../../../assets/info/data';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  data;
  constructor() { 
    this.data = weAre.agenda;
  }

  ngOnInit(): void {
  }

}
