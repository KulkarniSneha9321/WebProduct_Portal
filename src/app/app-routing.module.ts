import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
 {
  path:'login',
  component:LoginComponent
 },
 {
  path:'signup',
  component:SignupComponent
 },
 {
  path:'dashboard',
  component:DashboardComponent
 },
 {
  path:'product/:id',
  component:ProductDetailComponent
 },
 {
  path:'',
  redirectTo:'/login',
  pathMatch:'full'
 },
 {
  path:'**',
  redirectTo:'/login'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
