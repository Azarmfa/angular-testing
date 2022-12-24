import { DataService } from './../data.service';
// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as jsondata from '../../assets/jsondata.json';

@Component({
  selector: 'app-httptest',
  templateUrl: './httptest.component.html',
  styleUrls: ['./httptest.component.css'],
})
export class HttptestComponent implements OnInit {
  users: any;
  constructor(private dataservice: DataService) {
    // this.dataservice.getReqres().subscribe((res: any) => {
    //   console.log('response from API', res);
    //   console.log('response from API total pages', res.total_pages);
    //   this.users = res.data;
    // });
    this.dataservice.postReqresBigData(jsondata).subscribe((res) => {
      console.log('post response', res);
      this.users = res;
    });

    // this.users = jsondata;

    // console.log(this.dataservice.getReqres());
  }

  ngOnInit(): void {}
}
