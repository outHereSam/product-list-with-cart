import { Component, inject, Input } from '@angular/core';
import { CartItem, CartService } from '../../services/cart.service';
import { DessertsService } from '../../services/desserts.service';
import { Dessert } from '../../interfaces/IDessert';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.sass',
})
export class CartItemComponent {
  @Input() cartItemId = '';
  @Input() isCartItem = true;
  item: Dessert = {
    id: '',
    image: {
      thumbnail: '',
      mobile: '',
      tablet: '',
      desktop: '',
    },
    name: '',
    category: '',
    price: 0,
  };

  cartService: CartService = inject(CartService);
  dessertsService = inject(DessertsService);

  ngOnInit(): void {
    this.dessertsService.getAllDesserts().then((desserts) => {
      this.item = desserts.find(
        (dessert) => dessert.id === this.cartItemId
      ) || {
        id: '',
        image: {
          thumbnail: '',
          mobile: '',
          tablet: '',
          desktop: '',
        },
        name: '',
        category: '',
        price: 0,
      };
    });
  }
}
