import { from, Observable, of } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css'],
})
export class ObserverComponent implements OnInit, OnDestroy {
  title: String = 'Observables New';
  errorObj = '';
  arr: string[] = ['Saravana', 'Bharath'];
  arrObj$!: Observable<any>;
  obj$!: Observable<string>;
  constructor() {
    this.arrObj$ = from(this.arr);

    this.arrObj$.subscribe((resp) => {
      console.log(resp);
      this.title = JSON.stringify(this.arr);
    });

    //producer
    this.obj$ = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('test Observable1');
      }, 2000);

      setTimeout(() => {
        observer.next('test Observable2');
        // observer.error('this error');
      }, 3000);

      setTimeout(() => {
        observer.next('test Observable3');
      }, 4000);
      setTimeout(() => {
        observer.next('test Observable4');
        observer.complete();
        observer.next('test Observable5');
      }, 5000);
    });

    //consumer
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

  ngOnInit(): void {}

  ngOnDestroy() {
    // this.obj$.
  }
}
