import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare let require: any;
require('../../../node_modules/slick-carousel/slick/slick.min.js');

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.css']
})
export class BenefitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){

    $('.bgBlur, .benefit__close').on('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        let $this = $(e.currentTarget);
        let rel = $this.attr('rel');
        $('.bgBlur').removeClass("show");
        $('.benifit_item--image').find('.' + rel).removeClass(rel);
    });

    $('.showBenifit').on('click touchend', (e) => {
        let $this = $(e.currentTarget);
        let rel = $this.attr('rel');
        if ($this.parents(".benifit_item--image").find('.popup_slider').length != 0) {
            $('.popup_slider').removeClass('hidden');
            $this.parents(".benifit_item--image").find('.bgBlur').addClass("show");
            $this.parents(".benifit_item--image").find('.popup_slider').addClass(rel);
            $this.parents(".benifit_item--image").find('.loading').show();
        };
    });

    $('.benifit_item--image').hover(function() {
        $(this).toggleClass("show");
    });

    $(".owl--public").slick({
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
      arrows:true,      
      dots: false,
      nav:false,
      lazyLoad: 'ondemand',
    });

  }

}
