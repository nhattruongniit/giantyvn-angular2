import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-form-join',
  templateUrl: './form-join.component.html',
  styleUrls: ['./form-join.component.css']
})
export class FormJoinComponent implements OnInit {
  model: any = {};

  constructor(private http: Http,) { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    
  }

  applyFunc(name: string){
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      // var formData : FormData = new FormData();
      // formData.append('userCV', usercv);
      // formData.append('name', name);
      // formData.append('email', email);
      // formData.append('phoneNumber', phoneNumber)
      // formData.append('jobId', jobid);
      // formData.append('jobTitle', jobtitle);
      // formData.append('location', 'hcm');
       this.http
        .post('/api', {headers: headers})
          .subscribe(data => {
                console.log(data);
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
      console.log(name)
  }

}
