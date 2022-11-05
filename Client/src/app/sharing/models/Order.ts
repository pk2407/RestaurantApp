import { CartProduct } from "./CartProducts";

export class Order{
  id!:number;
  items!:CartProduct[];
  totalPrice!:number;
  name!:string;
  paymentId!:string;
  createdAt!: string;
  status!:string;
}
