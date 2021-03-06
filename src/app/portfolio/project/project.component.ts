import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { portfolio } from '../../../assets/info/data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project;
  constructor(private route:ActivatedRoute) 
  {
    this.route.params.subscribe(params => {
      const idProject = params.projectName;
      this.project = portfolio.projects.find(p => p.url == idProject);
      // alert(JSON.stringify(this.project));
    })
   }

  ngOnInit(): void {
  }
  index;
  config: SwiperConfigInterface = {
    slidesPerView: 5,
    slidesOffsetAfter: 0,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
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
}
