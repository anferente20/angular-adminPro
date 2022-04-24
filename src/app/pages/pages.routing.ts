import { Graph1Component } from './graph1/graph1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path:'dashboard',
    component:PagesComponent,
    children: [
        { path: '', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'grafica', component: Graph1Component },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
