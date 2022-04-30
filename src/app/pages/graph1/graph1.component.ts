import { Component } from '@angular/core';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component {
  public labels = [
    [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ],
    [ 'Sales Downloads', 'Files Downloads', 'Docs Downloads' ],
    [ 'New Users', 'Active Users', 'Inactive Users' ],
  ];

  public data = [
    [ 350, 450, 100 ],
    [ 1000, 1450, 2100 ],
    [ 350, 950, 100 ],
  ];

  public color = [
    ['#6857E6', '#009FEE',  '#F02059'],
    ['#00FFCD', '#0078ff',  '#FF7300'],
    ['#884DFF', '#EB96EB',  '#FF8D85'],
  ];
    

}
