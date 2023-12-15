import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';

const routes: Routes = [
  {path:'',redirectTo:'home1',pathMatch:'full'},
  {path:'home1',component:HomePageComponent},
    {path:'registration',component:RegistrationComponent},
   { path:'login',component:LoginComponent},
   {path:"home",component:HomeComponent},
   {path:"view",component:ViewComponent},
   {path:"admin1",component:AdminloginComponent},
   {path:"admin2",component:AdminhomeComponent},
   {path:"admin",component:AdminregistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
