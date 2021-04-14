import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IncComponent} from './inc/inc.component'
const routes: Routes = [

  {
    path : 'inc',
    component : IncComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
