import { ProductService } from './../../../service/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css']
})
export class ProductModifyComponent implements OnInit {

  products: any;

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    try {
      this.service.loadProduct().subscribe(p => {
        this.products  = p;
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  getProducts(){
    return this.products.prod
  }

}
