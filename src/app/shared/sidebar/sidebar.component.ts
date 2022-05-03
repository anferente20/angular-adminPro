import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public menuItems: any[] = []

  constructor(private sideBarService: SidebarService) { 
    this.menuItems = this.sideBarService.menu;
  }

  ngOnInit(): void { }

}
