import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule,  SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [PortfolioComponent, ProjectComponent],
  imports: [
    CommonModule,
    SwiperModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
