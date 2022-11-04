import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ParticularFoodComponent } from './components/pages/particular-food/particular-food.component';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search-bar/:search',component:HomeComponent},
  {path:'food/:id',component:ParticularFoodComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
