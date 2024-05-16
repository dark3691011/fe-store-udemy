import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  fullName?: string;
  address?: string;
  creditCard?: string;
  total = 1000;

  listCart = [
    {
      id: 3,
      name: 'Backpack',
      price: 79.99,
      url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Carry things around town!',
      amount: 10,
    },
    {
      id: 3,
      name: 'Backpack',
      price: 79.99,
      url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Carry things around town!',
      amount: 10,
    },
  ];

  onSubmit() {
    console.log('cac');
  }
}
