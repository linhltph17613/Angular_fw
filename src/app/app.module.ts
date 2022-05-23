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
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ValidateComponent } from './components/validate/validate.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';

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
    UserComponent,
    UserListComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule //formmodel đc sd ở các component đã có bên trên
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
