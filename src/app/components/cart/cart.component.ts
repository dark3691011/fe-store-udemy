import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private readonly cartService: CartService) {}

  fullName?: string;
  address?: string;
  creditCard?: string;
  total = 0;
  listCart: any = [];

  ngOnInit(): void {
    this.listCart = this.cartService.getCart();
    this.total = this.cartService.getTotalCart();
  }

  onSubmit() {}
}
