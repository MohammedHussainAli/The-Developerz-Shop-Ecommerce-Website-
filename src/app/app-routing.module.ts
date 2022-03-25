import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { BabyclothingComponent } from './babyclothing/babyclothing.component';
import { BagpacksComponent } from './bagpacks/bagpacks.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FacemasksComponent } from './facemasks/facemasks.component';
import { HomeComponent } from './home/home.component';
import { HoodiesComponent } from './hoodies/hoodies.component';
import { LoginComponent } from './login/login.component';
import { MugsComponent } from './mugs/mugs.component';
import { ProductDetailsBabyclothingComponent } from './product-details-babyclothing/product-details-babyclothing.component';
import { ProductDetailsBagpacksComponent } from './product-details-bagpacks/product-details-bagpacks.component';
import { ProductDetailsHoodieComponent } from './product-details-hoodie/product-details-hoodie.component';
import { ProductDetailsMugsComponent } from './product-details-mugs/product-details-mugs.component';
import { ProductDetailsPagSummerweareComponent } from './product-details-pag-summerweare/product-details-pag-summerweare.component';
import { ProductDetailsPageSweatshirtComponent } from './product-details-page-sweatshirt/product-details-page-sweatshirt.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { ProductDetailsStickersComponent } from './product-details-stickers/product-details-stickers.component';
import { ProductDetailsWallartComponent } from './product-details-wallart/product-details-wallart.component';
import { ProductDetaisFacemaskComponent } from './product-detais-facemask/product-detais-facemask.component';
import { StickersComponent } from './stickers/stickers.component';
import { SummerwearComponent } from './summerwear/summerwear.component';
import { SweatshirtsComponent } from './sweatshirts/sweatshirts.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { WallartsComponent } from './wallarts/wallarts.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:""
  },
  {
    component:TshirtsComponent,
    path:'tshirts'
  },
  {
    component:SummerwearComponent,
    path:'summer-wear'
  },
  {
    component:BabyclothingComponent,
    path:'baby-clothing'
  },
  {
    component:FacemasksComponent,
    path:'face-masks'
  },
  {
    component:MugsComponent,
    path:'mugs'
  },
  {
    component:BagpacksComponent,
    path:'bag-packs'
  },
  {
    component:WallartsComponent,
    path:'wall-arts'
  },
  {
    component:StickersComponent,
    path:'sticker'
  },
  {
    component:SweatshirtsComponent,
    path:'sweat-shirt'
  },
  {
    component:HoodiesComponent,
    path:'hoodies'
  },
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:WishlistComponent,
    path:'wishlist'
  },
  {
    component:AddtocartComponent,
    path:'addtocart'
  },
  {
    component:ContactComponent,
    path: 'contact'
  },
  {path: 'tshirt/:id', component:ProductDetailsPageComponent},
  {path: 'addtocart', component:AddtocartComponent},
  {
    component:CheckoutComponent,
    path: 'checkout'
  },
  {
    component:LoginComponent,
    path: 'login'
  },
  {path: 'sweatshirt/:id', component:ProductDetailsPageSweatshirtComponent},
  {path: 'summerwear/:id', component:ProductDetailsPagSummerweareComponent},
  {path: 'hoodie/:id', component:ProductDetailsHoodieComponent},
  {path: 'baby-clothing/:id', component:ProductDetailsBabyclothingComponent},
  {path: 'mugs/:id', component:ProductDetailsMugsComponent},
  {path: 'bag-packs/:id', component:ProductDetailsBagpacksComponent},
  {path: 'face-mask/:id', component:ProductDetaisFacemaskComponent},
  {path: 'stickers/:id', component:ProductDetailsStickersComponent},
  {path: 'wallart/:id', component:ProductDetailsWallartComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
