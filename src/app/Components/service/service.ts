import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root' // dùng chung cho toàn app
})
export class Service {

  // Nơi lưu danh sách sản phẩm (state)
  private productList = new BehaviorSubject<Product[]>([]);

  // Observable để component lấy dữ liệu
  products$ = this.productList.asObservable();

  constructor() {
    //Dữ liệu mẫu ban đầu
    this.productList.next([
      { id: 1, name: 'Laptop', price: 1500 },
      { id: 2, name: 'Phone', price: 800 }
    ]);
  }

  //Thêm sản phẩm
  addProduct() {
    const currentProducts = this.productList.value; // lấy danh sách hiện tại

    const newProduct: Product = {
      id: Date.now(),
      name: 'New Product',
      price: 999
    };

    // cập nhật lại danh sách
    this.productList.next([...currentProducts, newProduct]);
  }

  // Xoá sản phẩm
  deleteProduct(id: number) {
    const newList = this.productList.value.filter(p => p.id !== id);
    this.productList.next(newList);
  }
}
