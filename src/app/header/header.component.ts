import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    //menu for PC
    $('body, html').find('.drop_menu').hover(function() {
        $(this).find('.header__submenu').addClass("in");
        $(this).find('>a').addClass('hover');
    }, function() {
        $(this).find('.header__submenu').removeClass("in");
        $(this).find('>a').removeClass('hover');
    });
    // menu for mobile
    $('body, html').find('.navbar-toggle').click( () => {
        $('.header__menu').toggleClass('in');
    });
    $('body, html').find('.arrow-mobile').click( (e) => {
        let $this = $(e.currentTarget);
        $this.find(".caret").toggleClass('display');
        $this.siblings('.header__submenu').toggleClass('display');
    });

    $('body, html').find('.header__submenu li > a').click((e) => {
        let $this = $(e.currentTarget);
        $this.parents().parents(".header__menu").toggleClass('in');
        $this.parents(".header__submenu").toggleClass('in');
        $this.parents(".header__submenu").toggleClass('display');
    });

    /* === START MENU HEADER === */
    let scrolllTop = $(window).scrollTop();
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
        let scrollChange = $(window).scrollTop();
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


}
