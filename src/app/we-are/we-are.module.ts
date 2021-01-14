import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeAreRoutingModule } from './we-are-routing.module';
import { WeAreComponent } from './we-are.component';
import { EventComponent } from './event/event.component';
import { DateComponent } from './date/date.component';
import { AgendaComponent } from './agenda/agenda.component';
import { GaleryComponent } from './galery/galery.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SponsorsComponent } from './sponsors/sponsors.component';


@NgModule({
  declarations: [WeAreComponent, EventComponent, DateComponent, AgendaComponent, GaleryComponent, SponsorsComponent],
  imports: [
    CommonModule,
    SwiperModule,
    WeAreRoutingModule
  ]
})
export class WeAreModule { }
