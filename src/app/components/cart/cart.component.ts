import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Dessert } from '../../interfaces/IDessert';
import { DessertsService } from '../../services/desserts.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.sass',
})
export class CartComponent {
  cartService: CartService = inject(CartService);
  dessertsService: DessertsService = inject(DessertsService);
  protected dessertList: Dessert[] = [];

  constructor() {
    this.dessertsService.getAllDesserts().then((desserts: Dessert[]) => {
      this.dessertList = desserts;
    });
  }

  getTotalPrice(): number {
    return this.cartService.cartItems.reduce((total, cartItem) => {
      const item = this.dessertList.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
  }
}
