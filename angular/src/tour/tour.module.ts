import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ngModel comes from here

import { TourComponent } from './tour.component';
import { HeroesComponent } from './heroes/heroes.component';

import { TourRoutingModule } from './tour-routing.module';

@NgModule({
  declarations: [TourComponent, HeroesComponent],
  imports: [FormsModule, TourRoutingModule],
  exports: [TourComponent, HeroesComponent],
})
export class TourModule {}
