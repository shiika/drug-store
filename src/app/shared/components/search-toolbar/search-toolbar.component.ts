import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss']
})
export class SearchToolbarComponent {
  @Input() items: {id: string, name: string}[] = [];
  @Output() onOrderAdded: EventEmitter<any> = new EventEmitter<any>();
  selectedItemId: number | null = null;
  quantity: number = 0;
  constructor() {}

  addItem(): void {
    this.onOrderAdded.emit({selectedItemId: this.selectedItemId, quantity: this.quantity});
    this.selectedItemId = null;
    this.quantity = 0;
  }

}
