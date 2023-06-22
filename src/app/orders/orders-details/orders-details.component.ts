import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../orders.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent implements OnInit {
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
  drugs: any[] = [];
  orders: any[] = [];
  duplicatedOrder: any = null;
  selectedDrugId: number | null = null;
  isEditMode: boolean = false;
  editingOrder: any = null;
  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.drugs = this.orderService.drugs;
  }

  submitOrder(item: {selectedItemId: number, quantity: number}): void {
    this.duplicatedOrder = null;
    this.selectedDrugId = item.selectedItemId;
    const selectedDrugIndex: number = this.drugs.findIndex(drug => drug.id == item.selectedItemId);
    const selectedOrderIndex: number = this.orders.findIndex(order => order.drugId == this.drugs[selectedDrugIndex].id);
    if (this.drugs[selectedDrugIndex].quantity >= item.quantity) {
      if (selectedOrderIndex > -1) {
        this.duplicatedOrder = this.orders[selectedOrderIndex];
        this.orders[selectedOrderIndex].quantity += item.quantity;
        this.calculateTotalPrice(selectedOrderIndex);
      } else {
        this.drugs[selectedDrugIndex].quantity -= item.quantity;
        this.orders.push(
          {
            id: this.orders.length + 1,
            drugId: this.drugs[selectedDrugIndex].id,
            name: this.drugs[selectedDrugIndex].name,
            quantity: item.quantity,
            expiryDate: this.drugs[selectedDrugIndex].expiryDate,
            price: this.drugs[selectedDrugIndex].price,
            total: item.quantity * this.drugs[selectedDrugIndex].price
          }
        );
        // this.orderService.orders = this.orders;
      }
      setTimeout(() => {this.duplicatedOrder = null}, 4000);
      
    } else {
      alert(`${this.drugs[selectedDrugIndex].name} quantity is not available!`)
    }
  }

  onEditOrderName(drug: any, order: any): void {
    this.editingOrder = {...order, quantity: order.quantity,price: drug.price, drugId: drug.id, name: drug.name, id: order.id};
  }
  onEditOrderQuantity(order: any): void {
    this.editingOrder = {...order, quantity: order.quantity};
  }

  updateOrder(order: any): void {
    const editingOrderIndex: number = this.orders.findIndex(order => order.id == this.editingOrder.id);
    this.orders[editingOrderIndex] = this.editingOrder;
    console.log({editing: this.editingOrder})
    // this.orderService.orders = this.orders;
    this.editingOrder = null;
    this.calculateTotalPrice(editingOrderIndex);
  }

  deleteOrder(order: any): void {
    this.orders = this.orders.filter(
      item => item.id !== order.id
    );
    this.drugs = this.drugs.map(
      drug => {
        if (drug.id == order.drugId) drug.quantity += order.quantity;
        return drug
      }
    )
  }

  calculateTotalPrice(orderIndex: number): void {
    this.orders[orderIndex].total = this.orders[orderIndex].quantity * this.orders[orderIndex].price;
  }

  save(): void {
    this.orderService.drugs = this.drugs;
    this.orderService.orders = this.orders;
    this.router.navigate(["/orders/list"])
  }
}
