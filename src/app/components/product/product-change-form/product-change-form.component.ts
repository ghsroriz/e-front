import { ProductService } from './../../../service/product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-model';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-product-change-form',
  templateUrl: './product-change-form.component.html',
  styleUrls: ['./product-change-form.component.css']
})
export class ProductChangeFormComponent implements OnInit {



  product: Product = {
    cod_prod: null,
    image: '',
    desc: '',
    quant: 0,
    unityPrice: 0,
  }
  data: any;
  aux: any = null;

  constructor(private router: Router, private service: ProductService) { }

  ngOnInit(): void {
    this.product.cod_prod = parseInt(localStorage.getItem('cod_prod'));
  }


  salvar() {
    try {
      this.service.modifyProduct(this.product).subscribe(data => {
        this.data = data;
        this.service.showSnack(this.data.msg);
        localStorage.clear();
        this.router.navigate(['adm']);
      });
    } catch (e) {
      console.error(e);
    }
  }

  cancelar() {
    this.router.navigate(['/adm/modify']);
    this.service.showSnack('Cancelado')
    localStorage.clear();
  }

}
