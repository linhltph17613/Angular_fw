import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private productService : ProductService ,//các pthuc call api
    private router : Router //điều hướng
    ) { 
    this.productForm = new FormGroup({
      // name : new FormControl('', Validators.required)  //form control(giấ trị mặc định)
      name : new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15)
      ])  //form control(giấ trị mặc định)

    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.productForm.value);
    //1. Nhận dl từ form => this.productForm.value
    const data = this.productForm.value
    // 2. call api 
    this.productService.AddProduct(data).subscribe(data => {
      //3. ql ds products
      this.router.navigate(['/admin', 'products'])
      //3.1 khi đã quay về list thì ngOnInnit trong list trong list sẽ lại được chạy và call api
      //Lấy ds mới 
    })
  }

}
