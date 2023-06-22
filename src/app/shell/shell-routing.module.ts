import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';

const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      {
        path: "orders",
        loadChildren: () => import("../orders/orders.module").then(m => m.OrdersModule)
      },
      {
        path: "",
        redirectTo: "orders",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
