import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { loadDataProvider } from '../providers/load-data';
import { KeysPipe } from '../pipes/pipes';
import * as $ from 'jquery';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [loadDataProvider, KeysPipe]
})
export class JobsComponent implements OnInit {
  alias: string;
  sub: any;
  listJob: any;
  statusJob: any;
    public filterInput = new FormControl();
      public filterText: string;

  constructor(
    private http: Http,
    private loadData: loadDataProvider,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.loadData.getAllJob('/api/jobs/list_active').then(data =>{
      $('.job_processing').hide();
      if(data['data'].length > 0){
        this.listJob = data['data'];
        for(let i = 0; i < this.listJob.length; i ++){
          if(this.listJob[i]['urgent'] === true){
              this.statusJob = "Urgent";
          }else{
            this.statusJob = "New";
          }
        }
      }else{
        $('.job__message--nojob').show();
      }
    })
  };

  ngAfterViewInit(){
    this.sub = this.route.params.subscribe(params => {   
      this.alias = params.alias;
      let scrollTop = (name) => {
        $('html,body').animate({
          scrollTop: $(name).offset().top
        },'slow');
      }      
      if(this.alias != undefined){         
        scrollTop('.joinGianty');
      }
    });   

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
  };

  ngOnDestroy() {
    this.sub.unsubscribe();
  };

}
