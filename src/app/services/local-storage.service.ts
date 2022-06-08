import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TypeProductCart } from '../types/Products';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  //Định nghĩa xem làm cách nào để lắng nghe được lúc thay đổi của ls
  private serviceSubject = new Subject<string>() //Vừa giống Observable có thể 
  //lắng nghe được , vừa phát đc sự kiện để lắng nghe
  watchService() : Observable<any> {
    return this.serviceSubject.asObservable()
  }
  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
  setItem(addItem: TypeProductCart) {
    // 1. Cập nhật dữ liệu vào ls
    const cartItems = this.getItem();
    const existItem = cartItems.find((item: TypeProductCart) => item.id === addItem.id);
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.value += addItem.value;
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // 2. Phát tín hiệu để lắng nghe bên watchService
    this.serviceSubject.next(''); // báo là vừa thêm rồi đấy, update đi
  }
}
