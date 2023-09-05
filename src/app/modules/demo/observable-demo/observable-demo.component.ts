import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subscription,
  filter,
  interval,
  map,
  of,
  pipe,
} from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit, OnDestroy {
  demoObservable!: Observable<any>;
  demoSubscription!: Subscription;

  constructor() {}

  ngOnInit() {
    // this.demoObservable = of('小火龍', '皮卡丘', '超夢');
    // this.demoObservable = interval(1000);
    // const someNumbers = interval(1000);
    // // const transformValue = map((value) => `# ${value}`);
    // const transformValue = pipe(
    //   filter((value: number) => value % 2 !== 0),
    //   map((value) => `# ${value}`),
    // );
    // this.demoObservable = transformValue(someNumbers);

    this.demoObservable = interval(1000).pipe(
      filter((value: number) => value % 2 !== 0),
      map((value) => `# ${value}`),
    );
  }

  ngOnDestroy() {
    if (this.demoSubscription) {
      console.log('ngOnDestroy: unsubscribe demo observable.');
      this.demoSubscription.unsubscribe();
    }
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
