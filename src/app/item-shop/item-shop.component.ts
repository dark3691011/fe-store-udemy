import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-shop',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-shop.component.html',
  styleUrl: './item-shop.component.css',
})
export class ItemShopComponent {
  @Input() name: string | undefined;
  @Input() price: number | undefined;
  @Input() image: string | undefined;
  @Input() description: string | undefined;
  quantity: number | undefined = 1;
}
