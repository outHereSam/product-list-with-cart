import { Injectable } from '@angular/core';

export interface CartItem {
  id: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];

  constructor() {}

  get cartQuantity() {
    return this.cartItems.reduce(
      (quantity, item) => item.quantity + quantity,
      0
    );
  }

  getItemQuantity(id: string) {
    const item = this.cartItems.find((item) => item.id === id);

    return item ? item.quantity : 0;
  }

  increaseCartQuantity(id: string) {
    // Find the item in the cartItems array, if it's there increase by 1
    // if not, add it and make the quantity 1
    const item = this.cartItems.find((item) => item.id === id);

    if (item == null) {
      // the item doesn't exists, add it
      this.cartItems.push({ id, quantity: 1 });
    } else {
      // the item exists, increase the quantity
      item.quantity += 1;
      console.log(this.cartQuantity);
    }
  }

  decreaseCartQuantity(id: string) {
    // Find the item in the cartItems array, if it's there decrease by 1
    // if not, add it and make the quantity 1
    // Find the index of the item in the cartItems array
    const itemIndex = this.cartItems.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const item = this.cartItems[itemIndex];

      if (item.quantity === 1) {
        // If the quantity is 1, remove the item from the cart
        this.cartItems.splice(itemIndex, 1);
      } else {
        // Otherwise, decrease the quantity by 1
        item.quantity -= 1;

        console.log(this.cartQuantity);
      }
    }
  }

  removeFromCart(id: string) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
  }
}
