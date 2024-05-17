import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { AlertEnum, DataService } from './data.service';
import { CartItem } from '../models/cart.model';

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

    this.dataService.updateData({
      type: AlertEnum.SUCCESS,
      message: `Added ${amount} ${product.name} to cart!`,
    });
    return true;
  }

  async changeAmount({
    id,
    amount,
  }: {
    id: number;
    amount: number;
  }): Promise<CartItem[]> {
    const product = await this.productService.getProductById(id).toPromise();
    let cart: CartItem[] = JSON.parse(
      localStorage.getItem(this.keyLocalStorage) || '[]'
    );
    if (!product) {
      this.dataService.updateData({
        type: AlertEnum.DANGER,
        message: `Product with id ${id} not exist!`,
      });
      return cart;
    }
    const indexItem = cart.findIndex((e) => e.id === id);
    if (indexItem < 0) {
      this.dataService.updateData({
        type: AlertEnum.DANGER,
        message: `Item cart ${product?.name} not exist!`,
      });
    }
    cart[indexItem].amount = amount;
    localStorage.setItem(this.keyLocalStorage, JSON.stringify(cart));

    this.dataService.updateData({
      type: AlertEnum.SUCCESS,
      message: `Update amount ${product.name} success!`,
    });
    return cart;
  }

  async deleteItem(id: number) {
    let cart: CartItem[] = JSON.parse(
      localStorage.getItem(this.keyLocalStorage) || '[]'
    );
    const indexItem = cart.findIndex((e) => e.id === id);
    if (indexItem < 0) {
      this.dataService.updateData({
        type: AlertEnum.DANGER,
        message: `Item cart with id ${id} not exist!`,
      });
    }
    cart.splice(indexItem, 1);
    localStorage.setItem(this.keyLocalStorage, JSON.stringify(cart));

    this.dataService.updateData({
      type: AlertEnum.SUCCESS,
      message: `Removed from cart!`,
    });
    return cart;
  }

  getCart(): CartItem[] {
    return JSON.parse(localStorage.getItem(this.keyLocalStorage) || '[]');
  }

  clearCart() {
    localStorage.setItem(this.keyLocalStorage, '[]');
  }

  getTotalCart() {
    const cart = JSON.parse(localStorage.getItem(this.keyLocalStorage) || '[]');
    return cart
      .reduce((total: number, curr: any) => {
        return total + curr.price * curr.amount;
      }, 0)
      .toFixed(2);
  }
}
