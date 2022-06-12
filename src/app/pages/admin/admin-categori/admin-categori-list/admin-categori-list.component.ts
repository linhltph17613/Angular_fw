import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { TypeCategory } from 'src/app/types/Cate';

@Component({
  selector: 'app-admin-categori-list',
  templateUrl: './admin-categori-list.component.html',
  styleUrls: ['./admin-categori-list.component.css']
})
export class AdminCategoriListComponent implements OnInit {
 categories : TypeCategory[]

  //Định nghĩa service dưới tên 1 biến  đã tạo bên services
  constructor(private categoriService : CategoryService) { 
   this.categories = []
  }

  //Khi component render xong sẽ chạy 1 lần vào ngOnInnit
  ngOnInit(): void {
    this.onGetList();
  }

  onGetList(){
    //Lắng nghe API trả về kq , bao giờ trả về xong thì data sẽ có dl
    this.categoriService.getCategory().subscribe((data) => {
      this.categories = data
    })
  }

  onStatus(cateId: number | string, newStatus: number) {
    // this.productService.EditProduct(`${cateId}`, {
    //   status: newStatus
    // }).subscribe(data => {
    //   this.onGetList();
    // });
    this.categoriService.EditProduct(`${cateId}`, {
      status: newStatus
    }).subscribe(data => {
      this.onGetList();
    });
  }
  onDelete(id : string|number) {
    //confirm -> ktra dl rồi xóa -> cập nhật ds
    const confirmDelete = confirm('Bạn có muốn xóa k  ?')

    if(confirmDelete && id){
    this.categoriService.deleteProduct(id).subscribe((data) => {
      //cập nhật ds
      this.onGetList();
    })
    }
  }

}
