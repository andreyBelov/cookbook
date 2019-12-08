import {Component} from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {Product} from "../model/product.model";
import {CartModel} from "../model/cart";
import {Router} from "@angular/router";

@Component({
  selector: 'store',
  moduleId: module.id,
  templateUrl: './store.component.html'
})
export class StoreComponent {

  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository,
              private cart: CartModel,
              private router: Router) { }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  // get pageNumbers(): number[] {
  //   let productCount = this.repository.getProducts(this.selectedCategory).length;
  //   return Array(Math.ceil(productCount / this.productsPerPage)).fill(0).map((item, ind) => ind + 1);
  // }

  get pageCount(): number {
    let productCount = this.repository.getProducts(this.selectedCategory).length;
    return Math.ceil(productCount / this.productsPerPage)
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }

}
