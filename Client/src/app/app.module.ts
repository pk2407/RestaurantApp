import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchBarComponent } from './components/partials/search-bar/search-bar.component';
import { ParticularFoodComponent } from './components/pages/particular-food/particular-food.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/pages/login/login.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component';
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import { DefaultButtonComponent } from './components/partials/default-button/default-button.component';
import { RegisterComponent } from './components/pages/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchBarComponent,
    ParticularFoodComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RatingModule,
   HttpClientModule,
   ReactiveFormsModule,
   ToastrModule.forRoot({
    timeOut:5000,
    positionClass:'toast-bottom-left',
    newestOnTop:false
   })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
