import { Component } from '@angular/core';
import {Cart} from "../model/cart";

@Component({
  moduleId: module.id,
  templateUrl: "cart-detail.component.html"
})
export class CartDetailComponent {
  constructor(public cart: Cart) { }
}
