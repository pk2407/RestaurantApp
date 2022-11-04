import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/sharing/models/Food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   foods:Food[]=[];
  constructor(private foodService:FoodService,activatedRoute:ActivatedRoute) {
    let foodsObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params)=>{
    if(params.search)
    foodsObservable=this.foodService.getAllFoodsBySearch(params.search);
    else
    foodsObservable=foodService.getAll();

    foodsObservable.subscribe((serverFoods)=>{
      this.foods=serverFoods;
    })
  })

  }

  ngOnInit(): void {
  }

}
