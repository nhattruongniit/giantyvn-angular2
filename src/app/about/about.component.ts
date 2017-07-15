import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit,OnDestroy {

  private alias:string;
  private sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(){      
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
          case 'information-company':
            scrollTop('.about_intro');
            break;
          case 'management':
            scrollTop('.management');
            break;
          default:
            scrollTop('.history');
            break;
        }
      }
    });   
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
