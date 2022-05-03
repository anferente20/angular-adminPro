import { SettigsService } from './../../services/settigs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settingsService: SettigsService) { }

  ngOnInit(): void {
    this.settingsService.setCurrentTheme();
  }

  public changeTheme(theme: string) {
    this.settingsService.changeTheme(theme);
  }
}
