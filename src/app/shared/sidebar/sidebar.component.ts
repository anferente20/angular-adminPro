import { UserService } from 'src/app/services/user.service';
import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[] = [];
  public user: User | undefined;

  constructor(
    private sideBarService: SidebarService,
    private userService: UserService
  ) {
    this.menuItems = this.sideBarService.menu;
    this.user = this.userService.user;
  }

  ngOnInit(): void {}
}
