import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  //items: []
  items : string[] = [];

  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}