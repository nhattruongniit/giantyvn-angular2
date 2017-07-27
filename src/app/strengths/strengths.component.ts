import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as $ from 'jquery';
window['$'] = window['jQuery'] = $;
import 'slick-carousel/slick/slick';

declare let require: any;
require('../../../node_modules/isotope-layout/dist/isotope.pkgd.min.js');
require('../../../node_modules/venobox/venobox/venobox.min.js');

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html'
})
export class StrengthsComponent implements OnInit {

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
          case 'technology':
            scrollTop('.technology');
            break;
          case 'art-desgin':
            scrollTop('.panel_art');
            break;
          default:
            scrollTop('.panel_gallery');
            break;
        }
      }
    });      

    //section 3D
    let drags = (dragElement, resizeElement, container) => {
        dragElement.on("mousedown vmousedown", (e) => {
            dragElement.addClass('draggable');
            resizeElement.addClass('resizable');
            let dragWidth = dragElement.outerWidth(),
                xPosition = dragElement.offset().left + dragWidth - e.pageX,
                containerOffset = container.offset().left,
                containerWidth = container.outerWidth(),
                minLeft = containerOffset + 10,
                maxLeft = containerOffset + containerWidth - dragWidth - 10;
            dragElement.parents().on("mousemove vmousemove", (e) => {
                let leftValue = e.pageX + xPosition - dragWidth;

                if (leftValue < minLeft) {
                    leftValue = minLeft;
                } else if (leftValue > maxLeft) {
                    leftValue = maxLeft;
                }

                let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

                $('.draggable').css('left', widthValue).on("mouseup vmouseup ", (e) => {
                  let $this = $(e.currentTarget);
                  $this.removeClass('draggable');
                  resizeElement.removeClass('resizable');
                });

                $('.resizable').css('width', widthValue);

            }).on("mouseup vmouseup ", (e) => {
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
            e.preventDefault();
        }).on("mouseup vmouseup", (e) => {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
    }

    
    $('.cd-image-container').map((k, v) =>{
        drags( $(v).find('.cd-handle'),$(v).find('.cd-resize-img'),  $(v));
    })

    //section 2D 
    let effect = $('.right-effect-madzone .effect-public');
    let arrClass = ['effect-1', 'effect-2', 'effect-3'];
    let eleRemove = (_effect) => {
        _effect.removeClass('active');
        for (let i = 1; i < _effect.length + 1; i++) {
            _effect.removeClass("effect-" + i)
        }
    };
    
    let effectSketch = $('.model2D__sketch .effect-public');
    $('body').on('click', '.model2D__sketch .effect-public > a , .model2D__sketch .effect-public > img', (e) => {
        eleRemove(effectSketch);
        let $this = $(e.currentTarget);
        let parent = $this.parent();
        let rel = parent.attr("rel");
        parent.addClass('active');
        switch (rel) {
          case 'position_2':
              {
                  arrClass = ['effect-3', 'effect-1', 'effect-2'];
                  break;
              }
          case 'position_3':
              {
                  arrClass = ['effect-2', 'effect-3', 'effect-1'];
                  break;
              }
          default:
              {
                  arrClass = ['effect-1', 'effect-2', 'effect-3'];
              }
        };
        effectSketch.map((k,v) =>{
           $(v).addClass(arrClass[k]);
        })
    });  

    $('.slider_sketch').slick({
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
        lazyLoad: 'ondemand'
    });

    //section gallery
    let initVenoBox = () => {       
        $('.venobox_custom').venobox({
            border: '2px', // default: '0'
            bgcolor: '#fff', // default: '#fff'
            numeratio: false, // default: false
            infinigall: false, // default: false,
            spinner: 'wave',
        });
    }
    initVenoBox();

    let $portfolio;
    $portfolio = $('.gallery_items').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        filter: '.3D',
        resizesContainer: false,
        layoutMode: 'masonry',
        resizable: false
    });
    $('.filter-proj ul li > a').on('click', (e) => {
        let $this = $(e.currentTarget);
        let dataFilter = $this.attr('data-filter');
        if (dataFilter !== '*') {
            $('#load-more-image').hide();
        } else {
            $('#load-more-image').show();
        }
        $('.filter-proj ul li a').removeClass('active');
        $this.addClass('active');
        let selector = $this.attr('data-filter');
        $portfolio.isotope({
            filter: selector,
        });
    });
    
    // check load video
    let $video = $('.portfolio_video').find('.video');
    let videoLoad = document.querySelector('.video');
    let checkLoad = () => {
        videoLoad.addEventListener('loadeddata', function(){
            $('.portfolio_video .loading').css("z-index", "-1");
            $('.portfolio_video').hover(function() {
                $(this).find('.video').get(0).play();
            }, function() {
                $(this).find('.video').get(0).pause();
            });
        })
    }
    checkLoad();
  }

}
