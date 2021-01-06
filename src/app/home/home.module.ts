import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SwiperModule } from 'swiper/angular';

import { SwiperModule,  SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { AboutUsComponent } from './about-us/about-us.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [HomeComponent, HomeSliderComponent, AboutUsComponent],
  imports: [
    CommonModule,
    SwiperModule,
    HomeRoutingModule
  ],
  providers: [

  ]
})
export class HomeModule { }
