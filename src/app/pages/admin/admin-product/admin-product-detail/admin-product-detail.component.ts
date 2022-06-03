import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types/Products';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product : IProduct;

  constructor(private productService : ProductService,
              private activateRoute : ActivatedRoute
    ) {
      this.product = {
        id: 0,
        name: ''
      }
     }

  ngOnInit(): void {
    //activateroute sẽ có thể đọc biến đc truyền vào trên url
    //tên id được định nghĩa ở app-routing :id
    const idFromUrl = this.activateRoute.snapshot.params['id']
    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data;
    })
  }

}
