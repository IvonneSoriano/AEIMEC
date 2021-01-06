import { Component, OnInit } from '@angular/core';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { home } from '../../../assets/info/data';


@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  data;
  constructor() { 
    this.data = home;
  }

  ngOnInit(): void {
  }
  index;
  config: SwiperConfigInterface = {
    pagination: {
      el: '.pagination',
      renderBullet: function (index, bullet) {
        return '<span class="' + bullet + '"></span>';
      },
    },
  };

}
