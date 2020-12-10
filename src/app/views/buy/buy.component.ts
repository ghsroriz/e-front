import { ProductService } from './../../service/product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-model';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  product: Product;
  constructor(private router: Router, private service: ProductService) { }

  ngOnInit(): void {
    this.product = JSON.parse(localStorage.getItem('prod'))
  }

  buy() {
    this.router.navigate(['']);
    localStorage.clear();
    this.service.showSnack('Produto adquirido com sucesso!');
  }

  cancel(){
    this.router.navigate(['']);
    this.service.showSnack('Cancelado');
    localStorage.clear();
  }

}
