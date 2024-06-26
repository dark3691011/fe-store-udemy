import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-item-shop',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './item-shop.component.html',
  styleUrl: './item-shop.component.css',
})
export class ItemShopComponent {
  constructor(private readonly cartService: CartService) {}

  @Output() addCartEvent = new EventEmitter();
  @Input() product!: Product;
  quantity: number = 1;

  async addCart() {
    this.addCartEvent.emit({ id: this.product?.id, amount: this.quantity });
  }
}
