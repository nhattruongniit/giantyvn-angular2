import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import * as $ from 'jquery';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  @ViewChild('aboutTest') ele: ElementRef;

  constructor(
      private router: Router,
      private _elementRef : ElementRef,
      private renderer: Renderer
    ){
   
  }

  ngAfterViewInit() {
    this.router.events
    .filter(event => event instanceof NavigationStart)
    .subscribe((event:NavigationStart) => {
      let url = event.url;
      switch (url){
        case '/about/information-company':{
          $('html, body').animate({
              //scrollTop: $('.about_intro').offset().top
          }, 500);
          break;
        }
        default:{
          $('html, body').animate({
              scrollTop: 0
          }, 500);
          break;
        }
          
      }
      console.log(event.url);
    });
  }

  ngOnInit(){
      console.log('start app.component');
  }
}
