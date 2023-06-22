import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { SearchToolbarComponent } from './components/search-toolbar/search-toolbar.component';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    InfoPanelComponent,
    SearchToolbarComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [BreadcrumbComponent, InfoPanelComponent, SearchToolbarComponent, NgSelectModule, FormsModule]
})
export class SharedModule { }
