import { ActivationEnd, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [],
})
export class BreadcrumbComponent implements OnDestroy {
  title: String = '';
  titleSubs$: Subscription;
  constructor(private router: Router) {
    this.titleSubs$ = this.getParameters().subscribe(({ title }) => {
      this.title = title;
      document.title = `Admin Pro: ${title}`;
    });
  }
  ngOnDestroy(): void {
    document.title = 'Admin Pro';
    this.titleSubs$.unsubscribe();
  }

  private getParameters() {
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
