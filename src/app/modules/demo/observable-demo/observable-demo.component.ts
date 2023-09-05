import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit {
  demoObservable!: Observable<any>;
  demoSubscription!: Subscription;

  constructor() {}

  ngOnInit() {
    // this.demoObservable = of('小火龍', '皮卡丘', '超夢');
    this.demoObservable = interval(1000);
  }

  onClick() {
    // this.demoObservable.subscribe((value) => console.log(value));
    const observer = {
      next: (value: any) => console.log(value),
      error: (error: any) => console.log(error),
      complete: () => console.log('Demo observable completed.'),
    };

    // this.demoObservable.subscribe(observer);
    this.demoSubscription = this.demoObservable.subscribe(observer);
  }

  unsubscribe() {
    this.demoSubscription.unsubscribe();
  }
}
