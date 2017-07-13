import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import 'slick-carousel/slick/slick';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  timeEffect: any;

  constructor() { }

  ngOnInit() {
   $(".slider__banner").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll:1,
      fade: true,
      speed: 1000,
      cssEase: 'ease-in-out',
      autoplay:true,
      autoplaySpeed: 5000,
      draggable: false,
      focusOnSelect: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      arrows:false,      
      dots: false,
      nav:false,
    });

    $("#slick-games, #slick-apps").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll:1,
      cssEase: 'ease-in-out',
      autoplay:false,
      autoplaySpeed: 1000,
      draggable: true,
      focusOnSelect: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      arrows:false,      
      dots: true,
      nav:false,
      lazyLoad: 'ondemand',
    });

    if ($('.info-img--effect').length != 0) {
        this.timeEffect = setTimeout(function() {
            clearTimeout(this.timeEffect);
            $('.info-img--effect').addClass("effect");
        }, 2000)
    };

    $('.slider__tab p span').on('click', function() {
        var rel = $(this).attr('rel');
        $('.title_public').hide();
        $('.' + rel).show();
        $('.slider__tab p span').removeClass('active');
        $(this).addClass('active');
        $('.slider__products .slick-public').css({
            'opacity': "0",
            'z-index': '0'
        });
        $('#' + rel).css({
            'opacity': "1",
            'z-index': '1'
        });
    });
  }

}
