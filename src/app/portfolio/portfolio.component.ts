import { Component, OnInit } from '@angular/core';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { portfolio } from '../../assets/info/data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  data;
  projects;
  index;
  colaborations;
  indexColab;

  config: SwiperConfigInterface = {
    slidesPerView: 1,
    // width: 1310,
    spaceBetween: 10,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: false,
    loopFillGroupWithBlank: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
   
      992: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
      },
      1000: {
        spaceBetween: 0,
        slidesPerView: 3
      },
      1250: {
        spaceBetween: 0,
        slidesPerView: 3
      },
      1450: {
        spaceBetween: 0,
        slidesPerView: 3
        
      },
      1950: {
        spaceBetween: 0,
        slidesPerView: 4        
      }
    }

  };


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

  constructor() { 
    this.data = portfolio.portfolio;
    this.projects = portfolio.projects;
    this.colaborations = portfolio.colaborations;
  }

  ngOnInit(): void {
  }

}
