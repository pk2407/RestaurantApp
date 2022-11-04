import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, sample } from 'rxjs';
import { sample_foods } from 'src/data';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_URL } from '../sharing/constants/url';
import {Food} from '../sharing/models/Food'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }


  getAllFoodsBySearch(search:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL+search);
  }

  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOODS_BY_ID_URL+foodId);
  }
}
