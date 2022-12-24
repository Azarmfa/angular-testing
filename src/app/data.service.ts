import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getReqres(): Observable<any> {
    return this.http.get('https://reqres.in/api/users');
  }
  getJsonPlaceholder(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  postReqres(name: string, job: string): Observable<any> {
    return this.http.post('https://reqres.in/api/users', {
      name: name,
      job: job,
    });
  }

  postReqresBigData(json: any): Observable<any> {
    return this.http.post('https://reqres.in/api/users', {
      json: json,
    });
  }
}
