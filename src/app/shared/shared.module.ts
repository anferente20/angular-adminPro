import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
