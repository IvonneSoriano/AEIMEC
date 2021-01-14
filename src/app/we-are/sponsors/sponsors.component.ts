import { Component, OnInit } from '@angular/core';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { weAre } from '../../../assets/info/data';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  data;
  constructor() { 
    this.data = weAre.sponsors;
  }

  ngOnInit(): void {
  }
  index;
  configColab: SwiperConfigInterface = {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: false,
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

}
