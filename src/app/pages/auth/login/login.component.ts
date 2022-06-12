import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  constructor(
    private authService : AuthService,
    private router : Router,
    private Email : LocalStorageService  

  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]) ,
      password: new FormControl('', [
        Validators.required
      ]) ,

    })
   }

  ngOnInit(): void {
  }
  onSubmit() {
    const submitData = this.loginForm.value
    this.authService.login(submitData).subscribe(data => {

      //1. Nếu login thành công - > lưu dl user vào localstorge
      //setItem(key lưu trong localStorage, chuỗi giá trị)
      localStorage.setItem('loggedInUser', JSON.stringify(data))

      //2. Điều hướng quay về admin
      alert('Bạn đã đăng nhập thành công!')
      const ShowEmail = this.Email.getUser()
      console.log(ShowEmail);
      // if(ShowEmail.role === 1){
      //   this.router.navigateByUrl('/admin/products')
      // }    
      // else{
       this.router.navigateByUrl('')
      // }

    })
  }

}
