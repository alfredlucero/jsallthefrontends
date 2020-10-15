import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ngModel comes from here

import { TourComponent } from './tour.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';

import { TourRoutingModule } from './tour-routing.module';

@NgModule({
  declarations: [TourComponent, HeroesComponent, HeroDetailComponent],
  imports: [CommonModule, FormsModule, TourRoutingModule],
  exports: [TourComponent, HeroesComponent],
})
export class TourModule {}
