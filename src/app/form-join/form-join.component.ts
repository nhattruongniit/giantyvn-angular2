import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-join',
  templateUrl: './form-join.component.html',
  styleUrls: ['./form-join.component.css']
})
export class FormJoinComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    
  }

  applyFunc(name: string){
      console.log(name)
  }

}
