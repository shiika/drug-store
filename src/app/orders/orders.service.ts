import { Injectable } from "@angular/core";
import drugs from "../../mock/drugs.json";

@Injectable({
    providedIn: "root"
})

export class OrderService {
    private currentOrders: any[] = [];
    private availableDrugs: any[] = drugs.drugs;
    constructor() {}

    set drugs(drugs: any[]) {
        this.availableDrugs = drugs;
    }

    get drugs(): any[] {
        return this.availableDrugs
    }
    set orders(orders: any[]) {
        this.currentOrders = orders;
    }

    get orders(): any[] {
        return this.currentOrders
    }
}