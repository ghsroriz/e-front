import { Urls } from './../utils/urls';
import { Product } from './../models/product-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snack: MatSnackBar, private http: HttpClient) { }

  showSnack(msg: string) {
    this.snack.open(msg, 'fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  createProduct(product: Product): Observable<JSON>{
    try {
      return this.http.post<JSON>(`${Urls.urlInsert}`, product);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  loadProduct(): Observable<JSON>{
    try {
      return this.http.get<JSON>(`${Urls.urlSelect}`);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
