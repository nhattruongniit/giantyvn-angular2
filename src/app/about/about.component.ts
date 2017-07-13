import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
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

  async ngOnInit() {
     this.sub = await this.route.params.subscribe(params => {
       this.alias = params.alias
    });
    if(this.alias === 'information-company') {
      $('html,body').animate({
        scrollTop: $(".about_intro").offset().top - 80
      },'slow');
    }
   // console.log(this.alias)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
