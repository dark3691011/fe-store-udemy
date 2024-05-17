import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { SuccessPageComponent } from '../success-page/success-page.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule, SuccessPageComponent, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private readonly cartService: CartService) {}

  fullName?: string;
  address?: string;
  creditCard?: number;
  total = 0;
  listCart: any = [];
  isFinish = false;

  ngOnInit(): void {
    this.listCart = this.cartService.getCart();
    this.total = this.cartService.getTotalCart();
  }

  onSubmit() {
    this.isFinish = true;
    this.cartService.clearCart();
  }

  async changeAmount(id: number, amount: number) {
    this.listCart = await this.cartService.changeAmount({
      id,
      amount,
    });
    this.total = this.cartService.getTotalCart();
  }

  async removeItem(id: number) {
    this.listCart = await this.cartService.deleteItem(id);
  }
}
