import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessLoginGuard implements CanActivate {
  constructor(private router: Router) { } //Cần có router để điều hướng nếu false
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //1. Lấy ra thông tin user trong localstorage
    if (localStorage.getItem('loggedInUser')){
      
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') as string)
        if (loggedInUser) {
          window.alert("Bạn chưa đăng xuất")
          this.router.navigateByUrl('/');
        } 
    }else {
      return true;
    }
 
    return false;

  }

}
