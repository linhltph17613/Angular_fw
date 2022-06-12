import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { TableNameComponent } from './table/table-name/table-name.component';
import { TableGenderComponent } from './table/table-gender/table-gender.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { TableStatusComponent } from './table/table-status/table-status.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ValidateComponent } from './components/validate/validate.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './pages/shop/contact/contact.component';
import { ListShopComponent } from './pages/shop/list-shop/list-shop.component';
import { AboutComponent } from './pages/shop/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { DetailProductComponent } from './pages/shop/detail-product/detail-product.component';
import { CartComponent } from './components/cart/cart.component';
import { CartProductComponent } from './pages/shop/cart-product/cart-product.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { AdminUserFormComponent } from './pages/admin/admin-user/admin-user-form/admin-user-form.component';
import { AdminCategoriListComponent } from './pages/admin/admin-categori/admin-categori-list/admin-categori-list.component';
import { AdminCategoriFormComponent } from './pages/admin/admin-categori/admin-categori-form/admin-categori-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableNameComponent,
    TableGenderComponent,
    NameComponent,
    IdentityComponent,
    TableStatusComponent,
    TableAvatarComponent,
    FormComponent,
    ValidateComponent,
    UserListComponent,
    UserFormComponent,
    UserComponent,
    HomeComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AdminProductListComponent,
    AdminProductFormComponent,
    AdminProductDetailComponent,
    LoginComponent,
    ProductComponent,
    ContactComponent,
    ListShopComponent,
    AboutComponent,
    FooterComponent,
    SignupComponent,
    DetailProductComponent,
    CartComponent,
    CartProductComponent,
    AdminUserListComponent,
    AdminUserFormComponent,
    AdminCategoriListComponent,
    AdminCategoriFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, //formmodel đc sd ở các component đã có bên trên
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
