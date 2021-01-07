import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { contatUs, menu, socialNetworks } from 'src/assets/info/data';

import $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  socialNetworks;
  email;
  menu;
  constructor() {
    this.socialNetworks = socialNetworks;
    this.email = "mailto:"+contatUs.email;
    this.menu = menu;
   }

  ngOnInit(): void {
    $(document).ready(function(){
     
      var link = $('#nav a.dot');

      $(window).on('scroll', function(){
       changedNav();
      });
      
      link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        $(this).addClass('active');
        e.preventDefault();
      });

      function changedNav(){
        // alert("HOla");
        var sTop = $(window).scrollTop();
        // alert(sTop);
        $('section').each(function() {
          // alert("Section");
          var id = $(this).attr('id'),
          offset = $(this).offset().top-1,
          height = $(this).height();
          // alert(`Section ${id}`);
          if(sTop >= offset && sTop < offset + height){
            link.removeClass('active');
            $('#nav').find('[data-scroll="' + id + '"]').addClass('active');
            $('#nav').find('[data-scroll="' + id + '"]').addClass('active');
            // alert($('#nav').find('[data-scroll="' + id + '"]').addClass('active'));
          }
        });
      };
    });
  }

  
}
