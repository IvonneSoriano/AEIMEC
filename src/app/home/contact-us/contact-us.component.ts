import { Component, OnInit } from '@angular/core';
import { contatUs } from '../../../assets/info/data';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  data;
  constructor() { 
    this.data = contatUs;
  }

  ngOnInit(): void {
  }

}
