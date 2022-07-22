import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientdetailComponent } from './clientdetail/clientdetail.component';
import { DailyrecommendationComponent } from './dailyrecommendation/dailyrecommendation.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    ClientlistComponent,
    ClientdetailComponent,
    DailyrecommendationComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SwiperModule
  ]
})
export class PagesModule { }
