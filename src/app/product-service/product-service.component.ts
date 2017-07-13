import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html'
})
export class ProductServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".owl-products").slick({
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

  }

}
