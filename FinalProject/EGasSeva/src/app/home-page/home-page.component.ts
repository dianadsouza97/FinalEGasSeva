import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
    (function ($) {
      "use strict";
      /* Navbar Scripts */
      // jQuery to collapse the navbar on scroll
      $(window).on('scroll load', function () {
        if ($(".navbar").offset().top > 60) {
          $(".fixed-top").addClass("top-nav-collapse");
        } else {
          $(".fixed-top").removeClass("top-nav-collapse");
        }
      });
      
      // jQuery for page scrolling feature - requires jQuery Easing plugin
      $(function () {
        $(document).on('click', 'a.page-scroll', function (event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
          }, 600, 'easeInOutExpo');
          event.preventDefault();
        });
      });
    })

  }
  
}
