import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  public user: User | undefined;
  constructor(private userService: UserService) {
    this.user = this.userService.user;
  }

  ngOnInit(): void {}

  logOut() {
    this.userService.logout();
  }
}
