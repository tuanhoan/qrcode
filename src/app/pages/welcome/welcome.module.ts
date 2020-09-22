import { NgModule } from '@angular/core';

// import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { CardModule } from '../card/card.module';

const routes: Routes = [{ path: '', component: WelcomeComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NzCarouselModule,
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzRadioModule,
  ],
  declarations: [WelcomeComponent],
  exports: [RouterModule],
})
export class WelcomeModule {}
