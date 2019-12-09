import { HttpClientService } from './../../service/httpclient.service';
import { Cart } from './cart.model'
import { Component, OnInit,  Input, EventEmitter, Output } from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalSum: number = 0
  i:number;
  items: Array<any>;
  total: number = 0;
  

 
  constructor(private httpClientService: HttpClientService, private _router: Router) { 
    console.log("1 on chnages called")
  }

 
  ngOnInit() {
    this.httpClientService.getItems().subscribe(data => {
      console.log(data)
      this.items = data;
      this.items.forEach(value=>{
        this.totalSum = this.totalSum + (value.quantity * value.price)
      });
      // this.addTotal()
    });

  }
  update(id, quantity) {
    console.log(id.value, quantity.value)
    this.httpClientService.updateCart( id.value, quantity.value).subscribe(res => {
      this.items = res;
      this.items.forEach(value => {
        this.total = this.total + (value.quantity * value.price);
      });
      this.totalSum = this.total;
      this.total = 0; 
    });
  }

  delete(id) {
    this.httpClientService.delCart( id.value).subscribe(res => {
      this.items = res;
      this.items.forEach(value => {
        this.total = this.total + (value.quantity * value.price);
      });
      this.totalSum = this.total
      this.total = 0
    });
  }

  onBack(): void {
    this._router.navigate(['/accessories']);
  }


  

}
