import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductCartType, TypeProductCart } from 'src/app/types/Products';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  productCart: ProductCartType[] = [];
  cartItemValue : number = 0;
  total : number = 0
  constructor(
    private ngService : LocalStorageService
  ) { }

  ngOnInit(): void {
    this.AddToCart()
    this.ngService.watchService().subscribe(data => {
      this.AddToCart()
    })
  }
  AddToCart() {
    this.productCart = JSON.parse(localStorage.getItem('cart') as string)
    // console.log(this.productCart);
    this.cartItemValue = 0
    this.productCart.forEach(item => {
      this.cartItemValue += item.value
      this.total += item.price * +item.value
    })
  }
  

}
