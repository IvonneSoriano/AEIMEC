import { Component, OnInit } from '@angular/core';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { home } from '../../../assets/info/data';
import $ from 'jquery';

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
    $(document).ready(function () {
      var heroheight = $("#home").height();	
      $(".scrollDown").on('click', function(){
        $("html,body").animate({scrollTop: heroheight}, 800);
      })
    });


  }
  index;
  config: SwiperConfigInterface = {
    resistance: true,
    resistanceRatio: 0.1, speed: 1000,
    autoplay: false,
    mousewheel: true,
    parallax: true,
    pagination: {
      el: '.pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<div class="parallax-wrap">' + '<div class="parallax-element"></div></div></span>';
      },
    },
    on: {
      slideChangeTransitionStart: function () {

        $('.swiper-slide-active').find('div').each(function () {
          if (!$(this).hasClass("active")) {
            $(this).trigger('click');
          }
        });

        $('.swiper-slide-duplicate-active').find('div').each(function () {
          if (!$(this).hasClass("active")) {
            $(this).trigger('click');
          }
        });

        if ($('.swiper-slide-active').hasClass("change-header")) {
          $('#page-content').removeClass('light-content');
          $('#magic-cursor').removeClass('light-content');
        } else {
          $('#page-content').addClass('light-content');
          $('#magic-cursor').addClass('light-content');
        }

        if ($('.swiper-slide-duplicate-active').hasClass("change-header")) {
          $('#page-content').removeClass('light-content');
          $('#magic-cursor').removeClass('light-content');
        } else {
          $('#page-content').addClass('light-content');
          $('#magic-cursor').addClass('light-content');
        }
        $('.swiper-slide').find('.slide-title').each(function () {
          $(this).removeClass('active-title');
        });


      }
    },
  };
}
