import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private readonly dataService: DataService,
    private readonly productService: ProductsService
  ) {}

  keyLocalStorage = 'cart';

  async addCart({ id, amount }: { id: number; amount: number }) {
    const product = await this.productService.getProductById(id).toPromise();

    if (!product) {
      throw new Error('Product not found');
    }

    let cart = JSON.parse(localStorage.getItem(this.keyLocalStorage) || '[]');
    let checkExist = false;
    cart = cart.map((cartItem: any) => {
      if (cartItem.id === id) {
        checkExist = true;
        cartItem.amount += amount;
      }
      return cartItem;
    });

    cart = checkExist ? cart : [...cart, { ...product, amount }];
    localStorage.setItem(this.keyLocalStorage, JSON.stringify(cart));

    this.dataService.updateData(`Added ${amount} ${product.name} to cart!`);
    return true;
  }

  getCart() {
    return JSON.parse(localStorage.getItem(this.keyLocalStorage) || '[]');
  }

  clearCart() {
    localStorage.setItem(this.keyLocalStorage, '[]');
  }

  getTotalCart() {
    const cart = JSON.parse(localStorage.getItem(this.keyLocalStorage) || '[]');
    return cart.reduce((total: number, curr: any) => {
      return total + curr.price * curr.amount;
    }, 0);
  }
}
