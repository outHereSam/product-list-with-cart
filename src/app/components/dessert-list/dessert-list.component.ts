import { Component } from '@angular/core';
import { DessertCardComponent } from '../dessert-card/dessert-card.component';

@Component({
  selector: 'app-dessert-list',
  standalone: true,
  imports: [DessertCardComponent],
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.sass',
})
export class DessertListComponent {}
