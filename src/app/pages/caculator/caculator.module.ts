import { NgModule } from '@angular/core';

// import { WelcomeRoutingModule } from './welcome-routing.module';

import { CaculatorComponent } from './caculator.component';
import { Routes, RouterModule } from '@angular/router'; 
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form'; 
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: CaculatorComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes), 
    NzCarouselModule,
    CommonModule,
    NzFormModule,
    NgZorroAntdModule,
    ReactiveFormsModule

    
  ],
  declarations: [CaculatorComponent],
  exports: [RouterModule]
})
export class CaculatorModule { }

