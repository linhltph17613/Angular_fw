import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { TypeUser } from 'src/app/types/Auth';
import { TypeCategory } from 'src/app/types/Cate';
import { IProduct } from 'src/app/types/Products';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: IProduct[]
  cateP : TypeCategory;
  users: TypeUser[]

  //Định nghĩa service dưới tên 1 biến  đã tạo bên services
  constructor(private productService: ProductService,
    private cateService : CategoryService) {
    this.products = [],
    this.users = [],
    this.cateP = 
      {_id: '', name: '', status: 0}
    
    
  }

  //Khi component render xong sẽ chạy 1 lần vào ngOnInnit
  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    //Lắng nghe API trả về kq , bao giờ trả về xong thì data sẽ có dl
    this.productService.ListProducts().subscribe((data) => {
      this.products = data

      // this.cateService.getOneCate(this.products._id).subscribe((data) =>{
        
      // })

    })
  }

  onStatus(productId: string | undefined, newStatus: number) {
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
  onDelete(id: string | undefined) {
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
