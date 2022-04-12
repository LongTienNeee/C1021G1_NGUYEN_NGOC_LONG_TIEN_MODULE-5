import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  id:number;

  updateProductForm: FormGroup ;



  constructor(
    private product: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
      this.updateProductForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }

  ngOnInit(): void {
  }

  updateProduct() {
    const productList = this.updateProductForm.value;
    this.product.updateById(productList.id, productList.name, productList.price, productList.description)
    this.updateProductForm.reset();
    this.router.navigateByUrl("")
  }

  private getProduct(id: number) {
    return this.product.findById(id);
  }
}
