import { Component, OnInit } from '@angular/core';
import { OrderService } from '../orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  cols: any[] = [
    {
      label: "Drug ID",
      key: "drugId"
    },
    {
      label: "Drug Name",
      key: "name",
      isModifiable: true,
      type: "text"
    },
    {
      label: "Quantity",
      key: "quantity",
      isModifiable: true,
      type: "number",
      width: "15%"
    },
    {
      label: "Expiry Date",
      key: "expiryDate"
    },
    {
      label: "Price",
      key: "price"
    },
    {
      label: "Total Price",
      key: "total"
    },
  ];
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.orders;
  }

}
