import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TypeLoginRequest, TypeLoginResponse } from 'src/app/types/Auth';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users : TypeLoginRequest[]

  //Định nghĩa service dưới tên 1 biến  đã tạo bên services
  constructor(private productService : AuthService) { 
   this.users = []
  }

  //Khi component render xong sẽ chạy 1 lần vào ngOnInnit
  ngOnInit(): void {
    this.onGetList();
  }

  onGetList(){
    //Lắng nghe API trả về kq , bao giờ trả về xong thì data sẽ có dl
    this.productService.Listusers().subscribe((data) => {
      this.users = data
    })
  }

  onStatus(id:string , newStatus: number) {
    console.log(id);
    this.productService.EditUser(id, {
      status: newStatus
    }).subscribe(data => {
      this.onGetList();
    })
    // this.productService.EditUser(`${id}`, {
    // }).subscribe(data => {
    //   console.log("Ahii");
      
    //   this.onGetList();
    // });
  }
  onDelete(id : string|number) {
    //confirm -> ktra dl rồi xóa -> cập nhật ds
    const confirmDelete = confirm('Bạn có muốn xóa k  ?')

    if(confirmDelete && id){
    this.productService.deleteUser(id).subscribe((data) => {
      //cập nhật ds
      this.onGetList();
    })
    }
  }

}
