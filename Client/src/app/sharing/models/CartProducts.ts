import { Food } from "./Food";

export class CartProduct{
  constructor(public food:Food){ }
  quantity:number = 1 ;
  price: number = this.food.price;
}
