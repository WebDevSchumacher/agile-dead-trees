import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./auth/signup/signup.component";
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuard} from "./auth/auth.guard";
import {MainComponent} from "./main/main.component";
import {WritingDeskComponent} from "./writing-desk/writing-desk.component";
import {ShopComponent} from "./shop/shop.component";
import {LibraryComponent} from "./library/library.component";
import {AdministrationComponent} from "./administration/administration.component";
import {BooksCreateComponent} from "./books/books-create/books-create.component";
import {WritingDeskWriteComponent} from "./writing-desk/writing-desk-write/writing-desk-write.component";
import {ShopDetailsComponent} from "./shop/shop-details/shop-details.component";
import {LibraryReadComponent} from "./library/library-read/library-read.component";
import {ResourcesComponent} from "./administration/resources/resources.component";
import {UsergroupsComponent} from "./administration/usergroups/usergroups.component";
import {ReviewComponent} from "./review/review.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'writing-desk', component: WritingDeskComponent, canActivate: [AuthGuard]},
  {path: 'writing-desk/write', component: WritingDeskWriteComponent, canActivate: [AuthGuard]},
  {path: 'shop', component: ShopComponent, canActivate: [AuthGuard]},
  {path: 'shop/details', component: ShopDetailsComponent, canActivate: [AuthGuard]},
  {path: 'library', component: LibraryComponent, canActivate: [AuthGuard]},
  {path: 'library/read', component: LibraryReadComponent, canActivate: [AuthGuard]},
  {path: 'administration', component: AdministrationComponent, canActivate: [AuthGuard]},
  {path: 'administration/resource', component: ResourcesComponent, canActivate: [AuthGuard]},
  {path: 'administration/usergroups', component: UsergroupsComponent, canActivate: [AuthGuard]},
  {path: 'review', component: ReviewComponent, canActivate: [AuthGuard]},
  {path: 'book/create', component: BooksCreateComponent, canActivate: [AuthGuard]},
  {path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
