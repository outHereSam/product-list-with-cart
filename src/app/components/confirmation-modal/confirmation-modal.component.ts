import { Component, inject, Input } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../../services/cart.service';
import { DessertsService } from '../../services/desserts.service';
import { Dessert } from '../../interfaces/IDessert';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.sass',
})
export class ConfirmationModalComponent {
  cartService: CartService = inject(CartService);
  dessertsService: DessertsService = inject(DessertsService);
  protected dessertList: Dessert[] = [];

  ngOnInit() {
    this.dessertsService.getAllDesserts().then((desserts: Dessert[]) => {
      this.dessertList = desserts;
    });
  }

  @Input() modalOpened: boolean = false;

  closeModal() {
    this.modalOpened = false;
  }

  getTotalPrice(): number {
    return this.cartService.cartItems.reduce((total, cartItem) => {
      const item = this.dessertList.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
  }
}
