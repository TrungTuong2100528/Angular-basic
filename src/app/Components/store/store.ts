import { Component } from '@angular/core';
import { Service } from '../service/service';
import { ProductList } from "../product-list/product-list";
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store',
  templateUrl: './store.html',
  styleUrl: './store.css',
  imports: [ProductList, AsyncPipe, CommonModule]
})
export class Store {

  products$;

  constructor(private productService: Service) {
     // Observable danh sách sản phẩm
   this.products$ = this.productService.products$;
  }
 
  // Gọi service để thêm sản phẩm
  addProduct() {
    this.productService.addProduct();
  }

  // Gọi service để xoá sản phẩm
  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }
}
