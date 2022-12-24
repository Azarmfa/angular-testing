import { HttpClient } from '@angular/common/http';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import datajson from '../../assets/jsonplaceholder.json';
@Component({
  selector: 'app-jsonplaceholder',
  templateUrl: './jsonplaceholder.component.html',
  styleUrls: ['./jsonplaceholder.component.css'],
})
export class JsonplaceholderComponent implements OnInit {
  apiData: any;
  constructor(public http: HttpClient) {
    // this.http.get('assets/jsonplaceholder.json').subscribe((res) => {
    //   this.apiData = res;
    // });
    // console.log('apidata', datajson);
    this.apiData = datajson;
  }

  ngOnInit(): void {}
}
