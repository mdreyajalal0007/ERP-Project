import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrcComponent } from './hrc/hrc.component'
const routes: Routes = [

  {
    path : 'hrc',
    component : HrcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
