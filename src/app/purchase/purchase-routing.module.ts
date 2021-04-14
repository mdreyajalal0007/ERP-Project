import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PucComponent} from './puc/puc.component'
const routes: Routes = [


  {
    path : 'puc',
    component : PucComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
