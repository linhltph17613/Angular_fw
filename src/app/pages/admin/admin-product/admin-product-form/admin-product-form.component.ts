import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId : string;
 
  constructor(
    private productService : ProductService ,//các pthuc call api
    private router : Router ,//điều hướng,
    private activeRoute : ActivatedRoute //lấy tham số trên url 
    ) { 
    this.productForm = new FormGroup({
      // name : new FormControl('', Validators.required)  //form control(giấ trị mặc định)
      name : new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
        this.onValidateNameHasProduct
      ]) , //form control(giấ trị mặc định)
      price : new FormControl('', [
        Validators.required
      ]) ,
      image : new FormControl('', [
        Validators.required
      ]) ,
      salePrice : new FormControl('') ,
      desc : new FormControl('') 

    })
    this.productId = ''
  }

  ngOnInit(): void {
    this.productId = this.activeRoute.snapshot.params['id']
    console.log(this.productId);
    if(this.productId){
      this.productService.getProduct(this.productId).subscribe(data => {
        console.log(data);
        //cập nhật data cho form 
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          salePrice: data.salePrice,
          image : data.image,
          desc: data.desc
        })
      })
    }

  }
  onValidateNameHasProduct (control :  AbstractControl) : ValidationErrors|null {
    const inputValue = control.value
    if(inputValue && inputValue.length > 6 && !inputValue.includes('Product')){
        return {hasProductError: true}

    }
    return null
  }

  redirectToList() {
    this.router.navigateByUrl('/admin/products');

  }

  onSubmit(){
    console.log(this.productForm.value);
    //1. Nhận dl từ form => this.productForm.value
    const data = this.productForm.value
    if (this.productId ) {
      return this.productService.EditProduct(this.productId, data).subscribe(data => {
        console.log(1);
        
        this.redirectToList();
      })
    }
    // 2. call api 
    return this.productService.AddProduct(data).subscribe(data => {
      console.log(data);
      //3. ql ds products
        this.redirectToList()

      //3.1 khi đã quay về list thì ngOnInnit trong list trong list sẽ lại được chạy và call api
      //Lấy ds mới 
    })
  }

}
