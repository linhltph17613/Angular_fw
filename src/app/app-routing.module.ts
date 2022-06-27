import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { CanAccessLoginGuard } from './guards/can-access-login.guard';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminCategoriFormComponent } from './pages/admin/admin-categori/admin-categori-form/admin-categori-form.component';
import { AdminCategoriListComponent } from './pages/admin/admin-categori/admin-categori-list/admin-categori-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminUserFormComponent } from './pages/admin/admin-user/admin-user-form/admin-user-form.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { AboutComponent } from './pages/shop/about/about.component';
import { CartProductComponent } from './pages/shop/cart-product/cart-product.component';
import { CheckoutComponent } from './pages/shop/checkout/checkout.component';
import { ContactComponent } from './pages/shop/contact/contact.component';
import { DetailProductComponent } from './pages/shop/detail-product/detail-product.component';
import { ListShopComponent } from './pages/shop/list-shop/list-shop.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : '', component: ClientLayoutComponent,
    children : [
      {path : '', component: HomeComponent},
      {path : 'about', component: AboutComponent},
      {path : 'cart', component: CartProductComponent},
      { path: 'cart/checkout', component: CheckoutComponent },


      {path : 'products', 
    children: [
             {path: 'list', component : ListShopComponent},

             {path: ':id', component : DetailProductComponent},

    ]},

      {path : 'contact', component: ContactComponent},

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
    {path: 'users',
        children : [
             {path: '', component : AdminUserListComponent},
             {path: 'add', component : AdminUserFormComponent},
             {path: 'edit/:id', component : AdminUserFormComponent},
             //đẩy admin product id xuống dưới cùng tránh việc nhầm id = ''
        ]
    },
    {path: 'category',
        children : [
             {path: '', component : AdminCategoriListComponent},
             {path: 'add', component : AdminCategoriFormComponent},
             {path: 'edit/:id', component : AdminCategoriFormComponent},
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
      component: LoginComponent,
      canActivate: [CanAccessLoginGuard],
    },
    {
      path: 'register',
      component: SignupComponent
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
