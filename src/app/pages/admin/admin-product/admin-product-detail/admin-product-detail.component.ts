import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types/Products';
import { TypeProductCart } from 'src/app/types/Products';
@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
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
        category_id: ''
      }
     }

  ngOnInit(): void {
    //activateroute sẽ có thể đọc biến đc truyền vào trên url
    //tên id được định nghĩa ở app-routing :id
    const idFromUrl = this.activateRoute.snapshot.params['id']
    this.productService.getProduct(idFromUrl).subscribe(data => {
      console.log(data);
      this.product = data;
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
      category_id: this.product.category_id,


      value: +this.cartItemValues
    }

    // //2. Kiểm tra xem sp này đã có trong giỏ hàng chưa
    // //2.1.Lấy ra toàn bộ sp trong giỏ
    // const cartItems = JSON.parse(localStorage.getItem('cart') || '[]') 
    // //2.2 Tìm phần tử trong giỏ có id === addItem.id
    // const exitItem = cartItems.find((item : TypeProductCart) => item.id === addItem.id)
    // //3. Nếu không có thì push luôn vào làm phần tử mới
    // if(!exitItem){
    //   cartItems.push(addItem)
    // }else {
    //   //3.1 Nếu đã có thì cập nhật số lượng mới =  số lượng cũ + thêm
    //   exitItem.value += addItem.value
    // }
    // //4. Cập nhật dl giỏ hàng
    // localStorage.setItem('cart', JSON.stringify(cartItems))
    this.lsService.setItem(addItem)
    // //5. Cập nhật lại giá trị cho ô input
    this.cartItemValues = 1

  }

}
