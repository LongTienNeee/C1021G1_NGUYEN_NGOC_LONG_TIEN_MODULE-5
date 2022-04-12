import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  updateProductForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()

  })

  constructor(
    private product: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit() {
    const productList = this.updateProductForm.value;
    this.product.updateById(productList.id, productList.name, productList.price, productList.description)
    this.updateProductForm.reset();
    this.router.navigateByUrl("")
  }
}
