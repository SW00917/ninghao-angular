import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit {
  demoObservable!: Observable<String>;

  constructor() {}

  ngOnInit() {
    this.demoObservable = of('小火龍', '皮卡丘', '超夢');
  }

  onClick() {
    this.demoObservable.subscribe((value) => console.log(value));
  }
}
