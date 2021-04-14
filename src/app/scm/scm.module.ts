import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScmRoutingModule } from './scm-routing.module';
import { SccComponent } from './scc/scc.component';


@NgModule({
  declarations: [
    SccComponent
  ],
  imports: [
    CommonModule,
    ScmRoutingModule
  ]
})
export class ScmModule { }
