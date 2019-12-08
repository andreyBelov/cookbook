import { Component } from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {Product} from "../model/product.model";

@Component({
  selector: 'store',
  moduleId: module.id,
  templateUrl: './store.component.html'
})
export class StoreComponent {

  constructor(private repository: ProductRepository) { }

  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }
}
