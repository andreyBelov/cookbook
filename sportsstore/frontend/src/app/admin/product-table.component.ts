import { Component, OnInit } from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {Product} from "../model/product.model";

@Component({
  moduleId: module.id,
  templateUrl: './product-table.component.html'
})
export class ProductTableComponent {

  constructor(private repository: ProductRepository) { }

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }

}
