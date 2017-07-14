import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
window['$'] = window['jQuery'] = $;
import 'slick-carousel/slick/slick';
// import 'imagesloaded/imagesloaded.pkgd.min';
// import 'venobox/venobox/venobox';
// import 'isotope-layout/dist/isotope.pkgd.min';

declare let require: any;
require('../../../node_modules/isotope-layout/dist/isotope.pkgd.min.js');
require('../../../node_modules/venobox/venobox/venobox.min.js');
require('../../../node_modules/isotope-layout/dist/isotope.pkgd.min.js');

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html'
})
export class StrengthsComponent implements OnInit {
  leftValue: number;
  widthValue: string;

  constructor() { }

  ngOnInit() { 

  }

  ngAfterViewInit(){
    //section 3D
    var drags = (dragElement, resizeElement, container) => {
        dragElement.on("mousedown vmousedown", (e) => {
            dragElement.addClass('draggable');
            resizeElement.addClass('resizable');
            var dragWidth = dragElement.outerWidth(),
                xPosition = dragElement.offset().left + dragWidth - e.pageX,
                containerOffset = container.offset().left,
                containerWidth = container.outerWidth(),
                minLeft = containerOffset + 10,
                maxLeft = containerOffset + containerWidth - dragWidth - 10;
            dragElement.parents().on("mousemove vmousemove", (e) => {
                this.leftValue = e.pageX + xPosition - dragWidth;

                if (this.leftValue < minLeft) {
                    this.leftValue = minLeft;
                } else if (this.leftValue > maxLeft) {
                    this.leftValue = maxLeft;
                }

                this.widthValue = (this.leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

                $('.draggable').css('left', this.widthValue).on("mouseup vmouseup ", (e) => {
                  let $this = $(e.currentTarget);
                  $this.removeClass('draggable');
                  resizeElement.removeClass('resizable');
                });

                $('.resizable').css('width', this.widthValue);

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

    var eleRemove = (_effect) => {
        _effect.removeClass('active');
        for (var i = 1; i < _effect.length + 1; i++) {
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
    var initVenoBox = function() {       
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
    // $('.image_loded').imagesloaded(function() {
    //     if ($.fn.isotope) {
    //         $portfolio = $('.gallery_items').isotope({
    //             itemSelector: '.grid-item',
    //             percentPosition: true,
    //             filter: '.3D',
    //             resizesContainer: true,
    //             layoutMode: 'masonry',
    //             resizable: false
    //         });
    //         $('.filter-proj ul li > a').on('click', function() {
    //             var dataFilter = $(this).attr('data-filter');
    //             if (dataFilter !== '*') {
    //                 $('#load-more-image').hide();
    //             } else {
    //                 $('#load-more-image').show();
    //             }
    //             $('.filter-proj ul li a').removeClass('active');
    //             $(this).addClass('active');
    //             var selector = $(this).attr('data-filter');
    //             $portfolio.isotope({
    //                 filter: selector,
    //             });
    //         });
    //     };
    // });
    $portfolio = $('.gallery_items').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        filter: '.3D',
        resizesContainer: false,
        layoutMode: 'masonry',
        resizable: false
    });
    $('.filter-proj ul li > a').on('click', function() {
        var dataFilter = $(this).attr('data-filter');
        if (dataFilter !== '*') {
            $('#load-more-image').hide();
        } else {
            $('#load-more-image').show();
        }
        $('.filter-proj ul li a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $portfolio.isotope({
            filter: selector,
        });
    });
    // check load video
    let $video = $('.portfolio_video').find('.video');
    let videoLoad = document.querySelector('.video');

    function checkLoad() {
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
