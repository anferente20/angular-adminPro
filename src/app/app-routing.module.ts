import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
