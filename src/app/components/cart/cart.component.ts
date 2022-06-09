import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TypeProductCart } from 'src/app/types/Products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : TypeProductCart[] = []
  cartItemValues : number = 0;
  user: any
  constructor(
    private lsService : LocalStorageService
  ) { }

  ngOnInit(): void {
    this.onSetCartItems()
    //Cần 1 cách thức nào đó có thể lắng nghe việc thay đổi giá trị của ls
    //Hoặc cho biết khi nào có thể lấy dl mới 
    this.lsService.watchService().subscribe(data =>{
      // Khi serviceSubject.next('') thì subscribe sẽ được gọi
      this.onSetCartItems();
    })
  }
    onSetCartItems () {
    this.cartItems = this.lsService.getItem();

    this.cartItemValues = 0;
    this.cartItems.forEach(item => {
      this.cartItemValues += item.value;
      // alert("Thêm vào giỏ hàng thành công!")
    });
  }

}
