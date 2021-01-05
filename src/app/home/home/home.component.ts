import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
import { home } from '../../../assets/info/data';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data;
  constructor() { 
    this.data = home;
  }

  ngOnInit(): void {
  }

  onSwiper(swiper) {
    console.log(swiper)
  }
  onSlideChange() {
    console.log('slide change')
  }

}
