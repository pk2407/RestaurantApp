import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/sharing/models/Food';

@Component({
  selector: 'app-particular-food',
  templateUrl: './particular-food.component.html',
  styleUrls: ['./particular-food.component.scss']
})
export class ParticularFoodComponent implements OnInit {
  food!: Food;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService, private cartService:CartService,private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        foodService.getFoodById(params.id).subscribe(serverFood=>{
          this.food=serverFood;
        });
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }


}
