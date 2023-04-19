import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', path: '/' },
        { title: 'Progress Bar', path: 'progress' },
        { title: 'Graphs', path: 'graph' },
        { title: 'Promises', path: 'promises' },
        { title: 'Rxjs', path: 'rxjs' },
      ],
    },
  ];
  constructor() {}
}
