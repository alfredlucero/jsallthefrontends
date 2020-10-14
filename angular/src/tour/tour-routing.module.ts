import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TourComponent } from './tour.component';

const tourRoutes: Routes = [{ path: 'tour', component: TourComponent }];

@NgModule({
  imports: [RouterModule.forChild(tourRoutes)],
  exports: [RouterModule],
})
export class TourRoutingModule {}
