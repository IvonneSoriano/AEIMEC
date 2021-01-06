import { Component, OnInit } from '@angular/core';
import { contatUs, socialNetworks } from '../../../assets/info/data';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  socialNetworks;
  data;
  constructor() { 
    this.data = contatUs;
    this.socialNetworks = socialNetworks;
  }

  ngOnInit(): void {
  }

}
