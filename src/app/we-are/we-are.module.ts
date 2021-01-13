import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeAreRoutingModule } from './we-are-routing.module';
import { WeAreComponent } from './we-are.component';
import { EventComponent } from './event/event.component';


@NgModule({
  declarations: [WeAreComponent, EventComponent],
  imports: [
    CommonModule,
    WeAreRoutingModule
  ]
})
export class WeAreModule { }
