import { Router } from '@angular/router';
import { ProductService } from './../../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-model';


@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  products: any;

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    try {
      this.service.loadProduct().subscribe(data => {
        this.products = data;
        console.log(this.products);
      });
    } catch (e) {
      console.error(e);
      this.service.showSnack('Problemas para buscar os dados.')
    }
  }

  goToBuy(prod: Product) {
    localStorage.setItem('prod',JSON.stringify(prod));
    this.router.navigate(['/buy']);
  }

}
