import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { contatUs, menu, socialNetworks } from 'src/assets/info/data';

import $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  socialNetworks;
  facebook;
  instagram;
  whatsapp;
  email;
  menu;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.socialNetworks = socialNetworks;
    this.facebook = socialNetworks.facebook;
    this.instagram = socialNetworks.instagram;
    this.whatsapp = socialNetworks.whatsapp;
    this.email = "mailto:" + contatUs.email;
    this.menu = menu;
    // this.route.params.subscribe(p => {
    //   alert(JSON.stringify(p)
    // })

  }

  ngOnInit(): void {
    $(document).ready(function () {

      $(".burguer").on("click", function(){
        $(".nav").toggleClass("active");
        // $(".nav").slideToggle();
        // $(".menu").slideToggle();

      });

      var link = $('#nav a.dot');

      $(window).on('scroll', function () {
        changedNav();
      });

      link.on('click', function (e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        $(this).addClass('active');
        e.preventDefault();
      });

      function changedNav() {
        // alert("HOla");
        var sTop = $(window).scrollTop();
        // alert(sTop);
        $('section').each(function () {
          // alert("Section");
          var id = $(this).attr('id'),
            offset = $(this).offset().top - 1,
            
            height = $(this).height();
          // alert(`Section ${id}`);
          // alert(sTop);
          
        //  var largo = $(document).height();
        //  console.log(largo-(height+offset))
          // if(id == "contactUs" && largo-(height+offset) <10){
          //   console.log("Hola")
          //   $(location).attr('href',"/portfolio");
            
          // }
          if (sTop >= offset && sTop < offset + height) {
            link.removeClass('active');
            $('#nav').find('[data-scroll="' + id + '"]').addClass('active');
            $('#nav').find('[data-scroll="' + id + '"]').addClass('active');
            // alert($('#nav').find('[data-scroll="' + id + '"]').addClass('active'));
          }
        
        });
      };

      changedNav();
    });
  }


}
