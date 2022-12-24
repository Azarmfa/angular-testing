import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Observables New';
  errorObj = '';
  obj$!: Observable<string>;
  constructor() {
    //producer
    // this.obj$ = new Observable((observer) => {
    //   setTimeout(() => {
    //     observer.next('test Observable1');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('test Observable2');
    //     // observer.error('this error');
    //   }, 3000);
    //   setTimeout(() => {
    //     observer.next('test Observable3');
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.next('test Observable4');
    //     observer.complete();
    //     observer.next('test Observable5');
    //   }, 5000);
    // });
    // //consumer
    // this.obj$.subscribe(
    //   (resp) => {
    //     console.log(resp);
    //     this.title = resp;
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.errorObj = error;
    //   },
    //   () => {
    //     console.log('This is completed');
    //   }
    // );
  }
}
