import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';

import { NgChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { Graph1Component } from './graph1/graph1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ComponentsModule,
    NgChartsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    PagesComponent,
    AccountSettingsComponent
  ]
})
export class PagesModule { }
