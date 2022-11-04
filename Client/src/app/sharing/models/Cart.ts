import { CartProduct } from "./CartProducts";

export class Cart{
  items:CartProduct[] = [];
  totalPrice:number = 0;
  totalCount:number = 0;
}
