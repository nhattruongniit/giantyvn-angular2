import { Injectable }  from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class loadDataProvider{
  data: any;
  urlApi: string  = "https://job.gianty.com.vn";  // api honban

  constructor(private http: Http){}

  getAllJob(_url){
    return new Promise(resolve =>{
        this.http.get(this.urlApi + _url).subscribe(res =>{
           this.data = res.json();
           resolve(this.data);
        });
    });
  };
}