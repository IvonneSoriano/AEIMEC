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
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 1,
    centeredSlides: true,
    slidesOffsetAfter: 60,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1920: {
        slidesPerView: 5,
      },
    }
  };


  configColab: SwiperConfigInterface = {
    slidesPerView: 5,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: false,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1250: {
        slidesPerView: 4,
      },
      1920: {
        slidesPerView: 5,
      },
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
