import { NgModule } from '@angular/core';

// import { WelcomeRoutingModule } from './welcome-routing.module';

import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router'; 
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form'; 
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CardModule } from '../card/card.module';


const routes: Routes = [
  { path: '', component: LoginComponent },
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
    CardModule, 

    
  ],
  declarations: [LoginComponent],
  exports: [RouterModule]
})
export class LoginModule { }

