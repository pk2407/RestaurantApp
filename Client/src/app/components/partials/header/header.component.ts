import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/sharing/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  cartQuantity=0;
  user!:User;
  constructor(cartService:CartService, private userService:UserService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser)=>{
        this.user=newUser;
    })
  }

  ngOnInit(): void {
  }

  logOut(){
    this.userService.logOut();
  }

  get isAuth(){
    return this.user.token;
  }




}
