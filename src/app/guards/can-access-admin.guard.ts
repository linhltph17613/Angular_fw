import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(private router : Router){} //Cần có router để điều hướng nếu false
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //1. Lấy ra thông tin user trong localstorage
      const loggedInUser = localStorage.getItem('loggedInUser')
      //2. Kiểm tra xem thông tin có chính xác hay k
      if(loggedInUser) {
        return true
      }
      //3. Nếu đúng thì đi tiếp , nếu sai thì quay về login ngx-toas
      alert("Bạn phải đăng nhập!")
      this.router.navigateByUrl('/auth/login')
    return true;
  }
  
}
