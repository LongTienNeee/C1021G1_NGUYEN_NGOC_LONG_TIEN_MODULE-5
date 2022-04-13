import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../mode/product';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private routers: Router
  ) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    })
  }

  getAll(){
    this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  delete(id: number) {
    this.productService.delete(id).subscribe();
    this.productService.getAll();
    this.routers.navigateByUrl("");


  }
}
