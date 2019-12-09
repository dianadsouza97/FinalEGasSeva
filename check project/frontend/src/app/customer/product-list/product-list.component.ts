import { HttpClientService } from './../../service/httpclient.service';
import { Product } from './product.model';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<any>;
  total: number = 0;
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  addToCart(product) {
    console.log('Your product has been added to the cart!' + product.price);
    this.httpClientService.addToCart(product);
  }

  increaseAmount(productId) {
    console.log(productId)
    event.stopPropagation();
  }

  decreaseAmount(productId) {
    console.log(productId)
    event.stopPropagation();
  }

}
