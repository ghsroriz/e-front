import { Router } from '@angular/router';
import { ProductService } from './../../../service/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css']
})
export class ProductModifyComponent implements OnInit {

  products: any;
  aux: any;
  
  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    try {
      this.service.loadProduct().subscribe(p => {
        this.products = p;
      });
    } catch (e) {
      console.error(e);
    }
  }

  getProducts() {
    return this.products.prod
  }

  delete(cod_prod: number) {
    try {
      this.service.deleteProduct(cod_prod).subscribe(data => {
        this.aux = data;
        window.location.reload();
      });
    } catch (e) {
      console.error(e);
      this.service.showSnack("Erro ao tentar deletar")
    }
  }

  modify(cod_prod: number) {
    localStorage.setItem('cod_prod',cod_prod.toString());
    this.router.navigate(['/adm/modify/change']);
  }

}
