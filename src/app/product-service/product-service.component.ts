import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html'
})
export class ProductServiceComponent implements OnInit {

  private alias: string;
  private sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { 
  }  
  
  ngAfterViewInit(){
    //routing
    this.sub = this.route.params.subscribe(params => {   
      this.alias = params.alias;
      let scrollTop = (name) => {
        $('html,body').animate({
          scrollTop: $(name).offset().top - 80
        },'slow');
      }      
      if(this.alias != undefined){ 
        $('.loading').hide();
        switch (this.alias){
          case 'games':
            scrollTop('.panel_games');
            break;
          case 'mobile-apps':
            scrollTop('.panel_mobile');
            break;
          case 'offshore':
            scrollTop('.panel_offshore');
            break;
          case 'solution-outsourcing':
            scrollTop('.outsourcing');
            break;
          case 'testing':
            scrollTop('.panel_testing');
            break;
          case 'monitoring':
            scrollTop('.panel_monitoring');
            break;
          default:
            scrollTop('.panel_cloud');
            break;
        }
      }
    });      

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

  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
