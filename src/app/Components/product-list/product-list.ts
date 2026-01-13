import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  // Nhận danh sách sản phẩm từ component cha
  @Input() products: Product[] | null = [];

  // Gửi id sản phẩm cần xoá lên cha
  @Output() delete = new EventEmitter<number>();

  remove(id: number) {
    this.delete.emit(id);
  }
}
