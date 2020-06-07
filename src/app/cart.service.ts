import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  //items: []
  result : string[] = [];

  constructor() { }

  addToCart(product) {
    this.result.push(product);
  }

  getItems() {
    return this.result;
  }

  clearCart() {
    this.result = [];
    return this.result;
  }

}