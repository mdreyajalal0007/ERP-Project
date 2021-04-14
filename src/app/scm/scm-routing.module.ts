import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SccComponent} from './scc/scc.component'
const routes: Routes = [

  {
    path : 'scc',
    component : SccComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScmRoutingModule { }
