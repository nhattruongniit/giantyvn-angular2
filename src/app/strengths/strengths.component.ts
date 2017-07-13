import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
        drags( $(v).find('.cd-handle'),$ (v).find('.cd-resize-img'),  $(v));
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

  }

}
