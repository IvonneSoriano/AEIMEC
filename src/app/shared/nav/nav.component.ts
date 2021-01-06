import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { contatUs, menu, socialNetworks } from 'src/assets/info/data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  socialNetworks;
  email;
  menu;
  constructor() {
    this.socialNetworks = socialNetworks;
    this.email = "mailto:"+contatUs.email;
    this.menu = menu;
   }

  ngOnInit(): void {
  }

}
