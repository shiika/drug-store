import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrdersListComponent } from './orders-list/orders-list.component';


@NgModule({
  declarations: [
    OrdersComponent,
    OrdersDetailsComponent,
    OrdersListComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
