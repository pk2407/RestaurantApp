import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/sharing/models/Cart';
import { CartProduct } from 'src/app/sharing/models/CartProducts';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
   }

  ngOnInit(): void {
    console.log("error");
  }

  removeFromCart(cartItem:CartProduct){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartProduct,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

}
