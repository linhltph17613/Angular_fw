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
    // Cần 1 cách thức nào đó có thể lắng nghe việc thay đổi giá trị của ls
    // Hoặc cho biết khi nào có thể lấy dữ liệu mới
    this.ngService.watchService().subscribe(data => {
      // Khi serviceSubject.next('') thì subscribe sẽ được gọi

      this.AddToCart()
    })
  }
  AddToCart() {
    this.productCart = JSON.parse(localStorage.getItem('cart') as string)
    // console.log(this.productCart);
    this.cartItemValue = 0
    this.productCart.forEach(item => {
      this.cartItemValue += item.value
      this.total += ((item.price / 100 * (100 - item.salePrice)) * item.value)
    })
  }
  onRemove(id: string | undefined) {
    this.ngService.removeById(id);
    window.alert("Bạn xóa thành công")
  }
  ondelete() {
    this.ngService.remove();
    window.alert("Thanh toán thành công")
  }
  onDecrease(id: any) {
    this.ngService.decrease(id)
    window.alert("Cập nhật thành công")

  }
  onIncrease(id: any) {
    this.ngService.increase(id);
    window.alert("Cập nhật thành công")
  }



}
