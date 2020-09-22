import { NgModule } from '@angular/core';

// import { WelcomeRoutingModule } from './welcome-routing.module';

import { MonitorComponent } from './monitor.component';
import { Routes, RouterModule } from '@angular/router'; 
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: MonitorComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes), 
    NzCarouselModule,
    CommonModule
    
  ],
  declarations: [MonitorComponent],
  exports: [RouterModule]
})
export class MonitorModule { }

