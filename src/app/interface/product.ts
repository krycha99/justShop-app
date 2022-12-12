import { Category } from "../enum/category.enum";

export interface Product{
  id: number;
  productName: string;
  price: number;
  description: string;
  productCategory: Category;
  imageUrl: string;

}
