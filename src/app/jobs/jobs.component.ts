import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.wizard ul li > a').on('click', (e) => {
      let $this = $(e.currentTarget);
      let parent = $this.parent('li');
      let rel = $this.attr('rel');
      $('.wizard ul li, .wizard ul li a').removeClass('active');
      parent.addClass('active');
      $this.addClass('active');
      $('.tab-pane').hide();
      $('.' + rel).show();
    })
  }

}
