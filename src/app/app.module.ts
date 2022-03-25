import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { SummerwearComponent } from './summerwear/summerwear.component';
import { BabyclothingComponent } from './babyclothing/babyclothing.component';
import { FacemasksComponent } from './facemasks/facemasks.component';
import { MugsComponent } from './mugs/mugs.component';
import { BagpacksComponent } from './bagpacks/bagpacks.component';
import { WallartsComponent } from './wallarts/wallarts.component';
import { StickersComponent } from './stickers/stickers.component';
import { SweatshirtsComponent } from './sweatshirts/sweatshirts.component';
import { HoodiesComponent } from './hoodies/hoodies.component';
import { AboutComponent } from './about/about.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsPageSweatshirtComponent } from './product-details-page-sweatshirt/product-details-page-sweatshirt.component';
import { ProductDetailsPagSummerweareComponent } from './product-details-pag-summerweare/product-details-pag-summerweare.component';
import { ProductDetailsHoodieComponent } from './product-details-hoodie/product-details-hoodie.component';
import { ProductDetailsBabyclothingComponent } from './product-details-babyclothing/product-details-babyclothing.component';
import { ProductDetailsMugsComponent } from './product-details-mugs/product-details-mugs.component';
import { ProductDetailsBagpacksComponent } from './product-details-bagpacks/product-details-bagpacks.component';
import { ProductDetaisFacemaskComponent } from './product-detais-facemask/product-detais-facemask.component';
import { ProductDetailsStickersComponent } from './product-details-stickers/product-details-stickers.component';
import { ProductDetailsWallartComponent } from './product-details-wallart/product-details-wallart.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    TshirtsComponent,
    SummerwearComponent,
    BabyclothingComponent,
    FacemasksComponent,
    MugsComponent,
    BagpacksComponent,
    WallartsComponent,
    StickersComponent,
    SweatshirtsComponent,
    HoodiesComponent,
    AboutComponent,
    AddtocartComponent,
    WishlistComponent,
    ContactComponent,
    ProductDetailsPageComponent,
    CheckoutComponent,
    LoginComponent,
    ProductDetailsPageSweatshirtComponent,
    ProductDetailsPagSummerweareComponent,
    ProductDetailsHoodieComponent,
    ProductDetailsBabyclothingComponent,
    ProductDetailsMugsComponent,
    ProductDetailsBagpacksComponent,
    ProductDetaisFacemaskComponent,
    ProductDetailsStickersComponent,
    ProductDetailsWallartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
