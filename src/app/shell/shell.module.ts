import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ShellComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule
  ]
})
export class ShellModule { }
