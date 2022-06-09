import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductCartType, TypeProductCart } from '../types/Products';

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
  // setItem(addItem: TypeProductCart) {
  //   // 1. Cập nhật dữ liệu vào ls
  //   const cartItems = this.getItem();
  //   const existItem = cartItems.find((item: TypeProductCart) => item._id === addItem._id);
  //   if (!existItem) {
  //     cartItems.push(addItem);
  //   } else {
  //     existItem.value += addItem.value;
  //   }
  //   localStorage.setItem('cart', JSON.stringify(cartItems));

  //   // 2. Phát tín hiệu để lắng nghe bên watchService
  //   this.serviceSubject.next(''); // báo là vừa thêm rồi đấy, update đi
  // }
  getUser(){
    const user = localStorage.getItem('loggedInUser')
    if(!user) {
      return false;
    }
    return user
  }
  setItem(addItem: ProductCartType) {
    //1. Cập nhật dữ liệu vao localstorage 
    const cartItems = this.getItem();
   
    const exitsItem = cartItems.find((item: ProductCartType) => item.id === addItem.id);
    
    if(!exitsItem){
      cartItems.push(addItem);
    }else{
      exitsItem.value += addItem.value;
      exitsItem.price += (addItem.price*addItem.value)
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    //2. Phát tín hiệu để lắng nghe watchService
    this.serviceSubject.next('');
  }
  logOut(){
    return localStorage.removeItem('loggedInUser')
  }
}
