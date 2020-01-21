import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dateTimeObj;


  constructor(private service: ApiService) { }

  ngOnInit() {
    // assign API response to dateTimeObj on loading of application

  }

  getDateTime() {
    // Use this function to parse the date returned by the API upon button click
    
  }
}
