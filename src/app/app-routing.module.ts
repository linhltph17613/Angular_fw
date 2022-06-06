import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : '', component: ClientLayoutComponent,
    children : [
      {path : '', component: HomeComponent},
      {path : 'user', component: UserComponent}
    ]
  } ,
  {
    path : 'admin', component : AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard], //đưa vào đây để kiểm soát việc login trước khi vào admin
    children : [
      // {path : '' , redirectTo : 'users', pathMatch: 'full'},
      // {path : 'users', component: UserComponent},
      {path: 'products',
        children : [
             {path: '', component : AdminProductListComponent},
             {path: 'add', component : AdminProductFormComponent},
             {path: 'edit/:id', component : AdminProductFormComponent},
             {path: ':id', component : AdminProductDetailComponent},
             //đẩy admin product id xuống dưới cùng tránh việc nhầm id = ''

             

        ]
    },
     
    ]
  },
  {path :'auth',
  children: [
    {
      path: 'login',
      component: LoginComponent
    }
  ] 
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard] //Đưa vào để route bên trên có thể dùng
})
export class AppRoutingModule { }
