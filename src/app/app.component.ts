import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
      private router: Router,
      private location: Location
    ){
   
  }

  ngOnInit(){
        // this.router.events.subscribe(() => {
        //     let currentRouter = this.location.path();
                
        //     switch (currentRouter){
        //         case '/about/information-company':{
        //             $('html, body').animate({
        //                 scrollTop: 100
        //             }, 500);
        //             break
        //         }
        //         default:{
        //              $('html, body').animate({
        //                 scrollTop: 0
        //             }, 500);
        //         }
        //     }

        // });
        //menu for PC
        $('body, html').find('.drop_menu').hover(function() {
            $(this).find('.header__submenu').addClass("in");
            $(this).find('>a').addClass('hover');
        }, function() {
            $(this).find('.header__submenu').removeClass("in");
            $(this).find('>a').removeClass('hover');
        });
        // menu for mobile
        $('body, html').find('.navbar-toggle').click(function() {
            $('.header__menu').toggleClass('in');
        });
        $('body, html').find('.arrow-mobile').click(function() {
            $(this).find(".caret").toggleClass('display');
            $(this).siblings('.header__submenu').toggleClass('display');
        });

        $('body, html').find('.header__submenu li > a').click(function() {
            $(this).parents().parents(".header__menu").toggleClass('in');
            $(this).parents(".header__submenu").toggleClass('in');
            $(this).parents(".header__submenu").toggleClass('display');
        });

        /* === START MENU HEADER === */
        var scrolllTop = $(window).scrollTop();
        if (scrolllTop > 0) {
            $('.header').addClass("fixed");
            $('.header__logo--pc').addClass("header__logo--change");
            $('.buttonTop').show();
        } else {
            $('.header').removeClass("fixed");
            $('.header__logo--pc').removeClass("header__logo--change");
            $('.buttonTop').hide();
        }

        $(window).scroll(function() {
            var scrollChange = $(window).scrollTop();
            if (scrollChange > 0) {
                $('.header').addClass("fixed");
                $('.header__logo--pc').addClass("header__logo--change");
                $('.buttonTop').show();
            } else {
                $('.header').removeClass("fixed");
                $('.header__logo--pc').removeClass("header__logo--change");
                $('.buttonTop').hide();
            }
        })

        /* === END MENU HEADER === */
  }

  title = 'app';
}
