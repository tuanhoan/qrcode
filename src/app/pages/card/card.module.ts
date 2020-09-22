import { NgModule } from '@angular/core';

// import { WelcomeRoutingModule } from './welcome-routing.module';

import { CardComponent } from './card.component';
import { Routes, RouterModule } from '@angular/router'; 
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form'; 
import { NgZorroAntdModule, NzCardModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';


const routes: Routes = [
  { path: '', component: CardComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes), 
    NzCarouselModule,
    CommonModule,
    NzFormModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    NzIconModule,
    NzCardModule 
  ],
  declarations: [CardComponent],
  exports: [RouterModule]
})
export class CardModule { }

