import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceAndAccountingRoutingModule } from './finance-and-accounting-routing.module';
import { FaComponent } from './fa/fa.component';


@NgModule({
  declarations: [
    FaComponent
  ],
  imports: [
    CommonModule,
    FinanceAndAccountingRoutingModule
  ]
})
export class FinanceAndAccountingModule { }
