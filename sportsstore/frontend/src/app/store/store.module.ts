import { NgModule } from '@angular/core';
import {ModelModule} from "../model/model.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {StoreComponent} from "./store.component";
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary.component';
import { CartDetailComponent } from './cart-detail.component';
import { CheckoutComponent } from './checkout.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  exports: [StoreComponent]
})
export class StoreModule { }
