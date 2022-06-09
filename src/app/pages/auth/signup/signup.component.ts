import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
userForm: FormGroup;
userId: String
  constructor(
      private authService : AuthService ,//các pthuc call api
    private router : Router ,//điều hướng,
    private activeRoute : ActivatedRoute //lấy tham số trên url 
    
  ) { 
    this.userForm = new FormGroup({
      // name : new FormControl('', Validators.required)  //form control(giấ trị mặc định)
      name : new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
      ]) , //form control(giấ trị mặc định)
      email : new FormControl('', [
        Validators.required
      ]) ,
      image : new FormControl('', [
        Validators.required
      ]) ,
      password : new FormControl('', [
        Validators.required
      ]) ,


    })
    this.userId = ''
  }

  ngOnInit(): void {
    // this.userId = this.activeRoute.snapshot.params['id']
    // console.log(this.userId);
    // if(this.userId){
    //   this.authService.getProduct(this.userId).subscribe(data => {
    //     console.log(data);
    //     //cập nhật data cho form 
    //     this.userForm.patchValue({
    //       name: data.name,
    //       email: data.price,
    //       password: data.salePrice,
    //       image : data.image,
    //     })
    //   })
    // }

  }
   onSubmit() {
    const submitData = this.userForm.value
    this.authService.register( submitData).subscribe(data => {

      //1. Nếu login thành công - > lưu dl user vào localstorge
      //setItem(key lưu trong localStorage, chuỗi giá trị)
      // localStorage.setItem('loggedInUser', JSON.stringify(data))

      //2. Điều hướng quay về đăng nhập
      alert('Bạn đã đăng kí thành công!')
      this.router.navigateByUrl('/auth/login')
    })
  }

}
