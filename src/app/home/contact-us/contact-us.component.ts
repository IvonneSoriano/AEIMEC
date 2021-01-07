import { Component, OnInit } from '@angular/core';
import { contatUs, socialNetworks } from '../../../assets/info/data';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  facebook;
  instagram;
  whatsapp;
  data;
  constructor() { 
    this.data = contatUs;
    this.facebook = socialNetworks.facebook;
    this.instagram = socialNetworks.instagram;
    this.whatsapp = socialNetworks.whatsapp;
   
  }

  ngOnInit(): void {
  }

}
