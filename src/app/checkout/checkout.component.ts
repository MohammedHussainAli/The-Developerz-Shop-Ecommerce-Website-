import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart!:Cart;
  constructor(private cartServices:CartService) {
    this.setCart();
   }

  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartServices.getCart();
  }
  removeFromCart(cartItem: CartItem){
    this.cartServices.removeFromCart(cartItem.tshirt.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartServices.changeQuantity(cartItem.tshirt.id, quantity);
    this.setCart();
  }

}
