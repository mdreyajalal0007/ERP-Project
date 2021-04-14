import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineeringAndProductionRoutingModule } from './engineering-and-production-routing.module';
import { EpComponent } from './ep/ep.component';


@NgModule({
  declarations: [
    EpComponent
  ],
  imports: [
    CommonModule,
    EngineeringAndProductionRoutingModule
  ]
})
export class EngineeringAndProductionModule { }
