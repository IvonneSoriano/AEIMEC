import { Component, OnInit } from '@angular/core';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { aboutUs } from '../../../assets/info/data';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  subtitle;
  generalInfo;
  members;
  index;

  config: SwiperConfigInterface = {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 2
      },
      1250: {
        slidesPerView: 3
      },
      1450: {
        slidesPerView: 5
      }
    }
  };



  constructor() { 
    this.subtitle = aboutUs.subtitle;
    this.generalInfo = aboutUs.generalInfo;
    this.members = aboutUs.members;
  }

  ngOnInit(): void {
  }

}
