import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TypeLoginRequest, TypeLoginResponse } from 'src/app/types/Auth';
import {TypeCategory} from 'src/app/types/Cate'
@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
users : TypeLoginResponse;
category: TypeCategory[] = []
  constructor(private categoryService : CategoryService,
    private lsService: LocalStorageService,
    private router: Router) {
  this.users = {
    accessToken: "",
    user: {
      _id: "",
      name: "",
      email: "",
      image: "",
      status:0,
      role:0

    }
  };

   }

 ngOnInit(): void {
    this.onGetListCate();
    this.getData()
  }
  onGetListCate(){
    this.categoryService.getCategory().subscribe(data => {
      this.category = data;
    })
  }
  getData(){
    this.users = this.lsService.getUser();
    // console.log(this.users.user.image)
  }
  redirectToHome(){
    return this.router.navigate(['/products'])
    
  }
  onLogOut(){
    alert('Log out')
    this.lsService.logOut();
    location.reload()
  }
}
