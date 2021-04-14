import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpComponent } from './ep/ep.component'

const routes: Routes = [

  {
    path : 'ep',
    component : EpComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineeringAndProductionRoutingModule { }
