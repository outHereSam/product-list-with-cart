import { Component, Input } from '@angular/core';
import { Dessert } from '../../interfaces/IDessert';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dessert-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './dessert-card.component.html',
  styleUrl: './dessert-card.component.sass',
})
export class DessertCardComponent {
  @Input() dessertData: Dessert = {
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

  cartBtnClicked = false;

  addToCart(id: string) {
    this.cartBtnClicked = true;
    console.log('Item ID:', id);
  }
}
