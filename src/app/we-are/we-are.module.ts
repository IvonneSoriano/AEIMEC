import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeAreRoutingModule } from './we-are-routing.module';
import { WeAreComponent } from './we-are.component';
import { EventComponent } from './event/event.component';
import { DateComponent } from './date/date.component';
import { AgendaComponent } from './agenda/agenda.component';


@NgModule({
  declarations: [WeAreComponent, EventComponent, DateComponent, AgendaComponent],
  imports: [
    CommonModule,
    WeAreRoutingModule
  ]
})
export class WeAreModule { }
