import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    /*     this.firstObsSubscription = interval(1000).subscribe(count => {
          console.log(count);}) */

    const customInterval = new Observable((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is great than 3'));
        }
        count++;
      }, 1000)
    });



    this.firstObsSubscription = customInterval
      .pipe(filter(data => {
        return data > 0
      }), map((data: number) => {
        return 'Round: ' + (data + 1);
      }))
      .subscribe({
        next: (data) => console.log(data),
        error: (e) => console.error(e),
        complete: () => console.info('Completed!')
      })
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
