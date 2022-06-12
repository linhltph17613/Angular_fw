import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TypeLoginRequest } from 'src/app/types/Auth';
import {TypeCategory} from 'src/app/types/Cate'
@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
users : any;
category: TypeCategory[] = []
  constructor(private categoryService : CategoryService,
    private lsService: LocalStorageService,
    private router: Router) {
  this.users = [];

   }

 ngOnInit(): void {
    this.onGetListCate();
    this.users = this.lsService.getUser();
  }
  onGetListCate(){
    this.categoryService.getCategory().subscribe(data => {
      this.category = data;
    })
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
