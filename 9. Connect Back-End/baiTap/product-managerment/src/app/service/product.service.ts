import { Injectable } from '@angular/core';
import {Product} from '../mode/product';
import{HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = "http://localhost:3000/product"

  products: Product[] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  // @ts-ignore
  saveProduct(product): Observable<Product> {
    const header = {'content-type': 'application/json'};
    console.log(product);
    const body = JSON.stringify(product);
    console.log(body);
    return this.http.post<Product>(this.API_URL, body, {headers: header});
  }

  findById(id: number) {
    this.http.get<Product>(this.API_URL + '/' + id);
  }


  updateById(id, name, price, description) {
    // @ts-ignore
    this.http.put(this.API_URL, id, name, price, description)
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.API_URL}/${id}`);
  }
}
