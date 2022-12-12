import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public product!: Product ;

  constructor(activatedRoute:ActivatedRoute, productService:ProductService) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      productService.getProductById(params['id']).subscribe(
        (response: Product) => {
          this.product = response;
        }
      );
    })
   }

  ngOnInit(): void {
  }

}
