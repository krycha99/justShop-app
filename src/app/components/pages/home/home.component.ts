import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productService: ProductService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm'])
      this.productService.getAllProductsBySearch(params['searchTerm']).subscribe(
        (response: Product[]) => {
          this.products = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
      else
      this.getProducts();
    })
   }

  ngOnInit() {
  }

  public getProducts(): void{
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
