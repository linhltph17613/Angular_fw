import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.css']
})
export class AdminUserFormComponent implements OnInit {
  userForm: FormGroup;
  userId : string;
 
  constructor(
    private userService : AuthService ,//các pthuc call api
    private router : Router ,//điều hướng,
    private activeRoute : ActivatedRoute //lấy tham số trên url 
    ) { 
    this.userForm = new FormGroup({
      // name : new FormControl('', Validators.required)  //form control(giấ trị mặc định)
      name : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
      ]) , //form control(giấ trị mặc định)
    image : new FormControl('', [
        Validators.required,
      ]) , 
      email : new FormControl('', [
        Validators.required,
      ]) , 
      password : new FormControl('', [
        Validators.required,
      ]) , 
    
    })
    this.userId = ''
  }

  ngOnInit(): void {
    this.userId = this.activeRoute.snapshot.params['id']
    console.log(this.userId);
    if(this.userId){
      this.userService.getUser(this.userId).subscribe(data => {
        console.log(data);
        //cập nhật data cho form 
        this.userForm.patchValue({
          name: data.name,
          email: data.email,
          image: data.image,
          password: data.password,

        })
      })
    }

  }

  redirectToList() {
    this.router.navigateByUrl('/admin/users');

  }

  onSubmit(){
    console.log(this.userForm.value);
    //1. Nhận dl từ form => this.userForm.value
    const data = this.userForm.value
    if (this.userId ) {
      return this.userService.EditUser(this.userId, data).subscribe(data => {
        // console.log(1);
        alert('Đã sửa thành công!')
        
        this.redirectToList();
      })
    }
    return this.userService.AddUser(data).subscribe(data => {
      console.log(data);
      //3. ql ds products
        this.redirectToList()

      //3.1 khi đã quay về list thì ngOnInnit trong list trong list sẽ lại được chạy và call api
      //Lấy ds mới 
    })
  
  }

}
