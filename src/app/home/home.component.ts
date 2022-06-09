import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../types/Products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 products : IProduct[]
  constructor(private productService : ProductService) {
  this.products = [];

   }

  ngOnInit(): void {
    this.onGetList();
  }

   onGetList(){
    //Lắng nghe API trả về kq , bao giờ trả về xong thì data sẽ có dl
    this.productService.ListProducts().subscribe((data) => {
      this.products = data
    })
   
  }

}
