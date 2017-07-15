import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
      private router: Router
  ){    
     
  }

  ngOnInit(){
    $('.loading').hide();
    this.router.events
    .filter(event => event instanceof NavigationStart)
    .subscribe((event:NavigationStart) => {
      let url = event.url;
      $('.loading').show();
      if(url != undefined){
        $('.loading').hide();
        $('html, body').scrollTop(0);
      }
    });
  }  
  
  ngAfterViewInit(){    
  }
}
