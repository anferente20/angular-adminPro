import { SettigsService } from './../services/settigs.service';
import { Component, OnInit } from '@angular/core';

declare function customInitFunctions(): void;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  

  constructor(private settingsService: SettigsService) { }

  ngOnInit(): void {
    customInitFunctions()
  }

}
