import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template:`
    <div class="loading">
        <div class="loader"></div>
    </div>`
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
