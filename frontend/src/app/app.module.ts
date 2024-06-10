import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SignupComponent} from "./auth/signup/signup.component";
import {LoginComponent} from "./auth/login/login.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/auth-interceptor";
import {HeaderComponent} from "./header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { MainComponent } from './main/main.component';
import { WritingDeskComponent } from './writing-desk/writing-desk.component';
import { ShopComponent } from './shop/shop.component';
import { LibraryComponent } from './library/library.component';
import { AdministrationComponent } from './administration/administration.component';
import {BooksCreateComponent} from "./books/books-create/books-create.component";
import {BooksDisplayComponent} from "./books/books-display/books-display.component";
import { WritingDeskWriteComponent } from './writing-desk/writing-desk-write/writing-desk-write.component';
import {DisplayExtendDirective} from "./display-extend.directive";
import {MaterialElevationDirective} from "./material-elevation.directive";
import {QuillModule} from "ngx-quill";
import { ShopDetailsComponent } from './shop/shop-details/shop-details.component';
import { LibraryReadComponent } from './library/library-read/library-read.component';
import { ReviewComponent } from './review/review.component';
import { ResourcesComponent } from './administration/resources/resources.component';
import { UsergroupsComponent } from './administration/usergroups/usergroups.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    MainComponent,
    WritingDeskComponent,
    ShopComponent,
    LibraryComponent,
    AdministrationComponent,
    BooksCreateComponent,
    BooksDisplayComponent,
    WritingDeskWriteComponent,
    MaterialElevationDirective,
    DisplayExtendDirective,
    ShopDetailsComponent,
    LibraryReadComponent,
    ReviewComponent,
    ResourcesComponent,
    UsergroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    QuillModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
