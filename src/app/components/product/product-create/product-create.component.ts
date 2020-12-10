import { Product } from './../../../models/product-model';
import { Router } from '@angular/router';
import { ProductService } from './../../../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    image: '',
    desc: '',
    quant: 0,
    unityPrice: 0,
  }

  data: any = '';

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  cancelar(): void {
    this.router.navigate(['/adm']);
  }

  salvar(): void {
    try {
      this.service.createProduct(this.product)
        .subscribe(data => {
          this.data = data;
          this.service.showSnack(this.data.msg);
          this.router.navigate(['/adm'])
        });
    } catch (e) {
      console.error(e);
      this.router.navigate(['/adm']);
    }
  }

}
