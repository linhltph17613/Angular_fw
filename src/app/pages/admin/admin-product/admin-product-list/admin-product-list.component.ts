import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types/Products';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: IProduct[]

  //Định nghĩa service dưới tên 1 biến  đã tạo bên services
  constructor(private productService: ProductService) {
    this.products = []
  }

  //Khi component render xong sẽ chạy 1 lần vào ngOnInnit
  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    //Lắng nghe API trả về kq , bao giờ trả về xong thì data sẽ có dl
    this.productService.ListProducts().subscribe((data) => {
      this.products = data
    })
  }

  onStatus(productId: number | string, newStatus: number) {
    // this.productService.EditProduct(`${productId}`, {
    //   status: newStatus
    // }).subscribe(data => {
    //   this.onGetList();
    // });
    this.productService.EditProduct(`${productId}`, {
      status: newStatus
    }).subscribe(data => {
      console.log(newStatus);

      this.onGetList();
    });
  }
  onDelete(id: string | number) {
    //confirm -> ktra dl rồi xóa -> cập nhật ds
    const confirmDelete = confirm('Bạn có muốn xóa k  ?')

    if (confirmDelete && id) {
      this.productService.deleteProduct(id).subscribe((data) => {
        //cập nhật ds
        alert('Bạn đã xóa thành công!')
        this.onGetList();
      })
    }
  }

}
