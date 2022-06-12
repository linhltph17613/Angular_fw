import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { TypeCategory } from 'src/app/types/Cate';
import { IProduct } from 'src/app/types/Products';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product : IProduct;
  cartItemValues : number = 1;

  constructor(private productService : ProductService,
              private activateRoute : ActivatedRoute,
              private lsService : LocalStorageService

    ) {
  this.product = {
        _id: '',
        name: '',
        price: 0,
        salePrice: 0,
        image: '',
        status : 0,
        desc : '',
      };

   }

 ngOnInit(): void {
    //activateroute sẽ có thể đọc biến đc truyền vào trên url
    //tên id được định nghĩa ở app-routing :id
   const idFromUrl = this.activateRoute.snapshot.params['id'];

    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data;
      // console.log(data);
    })
  }
   onInputValueChange(event : any) {
    this.cartItemValues = event.target.value;
  }
   onAddToCart(){
    //1. Định nghĩa cấu trúc thêm vào giỏ
    const addItem = {
      _id: this.product._id,
      name: this.product.name,
      price: this.product.price,
      salePrice: this.product.salePrice,
      image: this.product.image,
      desc: this.product.desc,

      value: +this.cartItemValues
    }
    const cartItem =JSON.parse(localStorage.getItem('cart') || '[]')
    const exitItem = cartItem.find((item: TypeCategory) => item._id === addItem._id)
    if(!exitItem){
      cartItem.push(addItem)
    }else{
      exitItem.value += addItem.value
    }
     this.lsService.setItem(addItem)
    // //5. Cập nhật lại giá trị cho ô input
    this.cartItemValues = 1

  }
}
