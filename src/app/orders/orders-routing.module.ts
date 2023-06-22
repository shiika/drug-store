import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  {
    path: "",
    component: OrdersComponent,
    children: [
      {
        path: "details",
        component: OrdersDetailsComponent
      },
      {
        path: "list",
        component: OrdersListComponent
      },
      {
        path: "",
        redirectTo: "details",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
