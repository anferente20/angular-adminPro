import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  public progressBar1: number = 25;
  public progressBar2: number = 35;

  public getPercentage1() {
    return `${this.progressBar1}%`;
  }
  public getPercentage2() {
    return `${this.progressBar2}%`;
  }
}
