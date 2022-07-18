import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { AdminComponent } from './admin/admin.component';
import { BulkUploadComponent } from './bulk-upload/bulk-upload.component';
import { CartComponent } from './cart/cart.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StockReportComponent } from './stock-report/stock-report.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserComponent } from './user/user.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ['User'] } },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {path:'', redirectTo:"/home",pathMatch:'full'},
  { path: 'registration', component: RegistrationComponent },
  { path: 'addNewProduct', component: AddNewProductComponent },
  { path: 'userManagement', component: UserManagementComponent },
  { path: 'bulkUpload', component: BulkUploadComponent },
  { path: 'stockReport', component: StockReportComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'updateProduct/:productId', component: UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
