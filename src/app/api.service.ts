import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) {
    this.http.get('https://jsonmock.hackerrank.com/datetime').subscribe((value) => {
      return value;
    });
  }

  getDateTimeAPI() {
    // Call the API and return the response (change the code below)
    let res: Response;
    return res.json();

  }
}
