import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types/Products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
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
