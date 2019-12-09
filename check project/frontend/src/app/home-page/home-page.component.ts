import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }


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
  
  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['customer'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
  
}
