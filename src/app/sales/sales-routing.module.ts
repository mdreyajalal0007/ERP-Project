import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SacComponent} from './sac/sac.component'
const routes: Routes = [

  {
    path : 'sac',
    component : SacComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
