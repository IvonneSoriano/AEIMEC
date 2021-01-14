import { Component, OnInit } from '@angular/core';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { weAre } from '../../../assets/info/data';
import $ from 'jquery';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  data;
  constructor() {
    this.data = weAre.gallery;
   }

  ngOnInit(): void {
  }

  
  index;
  config: SwiperConfigInterface = {
    resistance: true,
    resistanceRatio: 0.1,
    autoplay: true,
    loop: true,
    speed: 1000,
    mousewheel: false,
    parallax: true,
    pagination: {
      el: '.pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<div class="parallax-wrap">' + '<div class="parallax-element"></div></div></span>';
      }
    }
  };
}
