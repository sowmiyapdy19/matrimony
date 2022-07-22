import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientdetailComponent } from './clientdetail/clientdetail.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { DailyrecommendationComponent } from './dailyrecommendation/dailyrecommendation.component';

const routes: Routes = [
  {
    path:'',
    component:ClientlistComponent
  },
  {
    path:'clientdetail/:id',
    component:ClientdetailComponent
  },
  {
    path:'dailyrecommendation',
    component:DailyrecommendationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
