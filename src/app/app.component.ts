import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
      private router: Router,
      private location: Location
    ){
    router.events
    .filter(event => event instanceof NavigationStart)
    .subscribe((event:NavigationStart) => {
      // You only receive NavigationStart events
      console.log(event)
    });
  }

  ngOnInit(){
      console.log('start app.component');
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
        
  }

  title = 'app';
}
