import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Tshirtdetails } from '../models/tshirtdetail';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart=new Cart();
addToCart(tshirt:Tshirtdetails) : void{
  let cartItem=this.cart.items.find(item => item.tshirt.id === tshirt.id)
  if(cartItem){
    this.changeQuantity(tshirt.id , cartItem.quantity +1)
    return;
  }
  this.cart.items.push(new CartItem(tshirt));
}
removeFromCart(tshirtId:number) : void{
  this.cart.items = this.cart.items.filter(item=>item.tshirt.id !=tshirtId)
}
changeQuantity(quantity:number, tshirtId:number){
  let cartItem= this.cart.items.find(item =>item.tshirt.id === tshirtId);
  if(!cartItem) return;
  cartItem.quantity = quantity;
}
getCart():Cart{
  return this.cart;
}

}
