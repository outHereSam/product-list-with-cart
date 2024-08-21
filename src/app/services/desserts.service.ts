import { Injectable } from '@angular/core';
import { Dessert } from '../interfaces/IDessert';

@Injectable({
  providedIn: 'root',
})
export class DessertsService {
  url = `http://localhost:3000/desserts`;

  constructor() {}

  async getAllDesserts(): Promise<Dessert[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
