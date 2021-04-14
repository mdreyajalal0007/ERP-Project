import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaComponent } from './fa/fa.component'
const routes: Routes = [

{
  path : 'fa',
  component : FaComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceAndAccountingRoutingModule { }
