import { Component, Input, OnDestroy } from '@angular/core';
import {
  filter,
  interval,
  map,
  Observable,
  retry,
  Subscription,
  take,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {
  intervalSubs: Subscription;
  constructor() {
    // this.getObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs:',valor),
    //   err => console.warn('Error: ', err),
    //   () => console.info('Completado!'),
    // );

    this.intervalSubs = this.getObservableI().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  private getObservable(): Observable<number> {
    let i = 0;
    return new Observable<number>((observer) => {
      let intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          observer.error('panic! :(');
        }
      }, 1000);
    });
  }

  private getObservableI(): Observable<number> {
    return interval(500).pipe(
      //take(10),
      map((valor) => valor + 1),
      filter((valor) => (valor % 2 === 0 ? true : false))
    );
  }
}
