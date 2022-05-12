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

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableNameComponent,
    TableGenderComponent,
    NameComponent,
    IdentityComponent,
    TableStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
