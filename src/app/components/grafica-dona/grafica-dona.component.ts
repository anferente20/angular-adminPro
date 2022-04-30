import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [],
})
export class GraficaDonaComponent implements OnInit {
  @Input() labels: string[] = [];
  @Input() color: string[] = [];
  @Input() data: number[] = [];
  @Input() title: string = '';

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [{ data: [], backgroundColor: [] }],
  };

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.labels,
      datasets: [{ data: this.data, backgroundColor: this.color }],
    };
  }
}
