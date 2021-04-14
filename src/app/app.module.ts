import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CrmModule} from './crm/crm.module';
import {EngineeringAndProductionModule} from './engineering-and-production/engineering-and-production.module'
import {FinanceAndAccountingModule} from './finance-and-accounting/finance-and-accounting.module'
import {HrModule} from './hr/hr.module'
import {InventoryModule} from './inventory/inventory.module'
import {PurchaseModule} from './purchase/purchase.module'
import {SalesModule} from './sales/sales.module'
import {ScmModule} from './scm/scm.module';

@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CrmModule,
    EngineeringAndProductionModule,
    FinanceAndAccountingModule,
    HrModule,
    InventoryModule,
    PurchaseModule,
    SalesModule,
    ScmModule
  
  
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
