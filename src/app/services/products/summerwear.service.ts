import { Injectable } from '@angular/core';
import { Summerdetails } from 'src/app/models/summerdetails';

@Injectable({
  providedIn: 'root'
})
export class SummerwearService {

  constructor() { }
  
  getSummerWearById(id:number): Summerdetails{
    return this.getALl().find(summerwear => summerwear.id == id)!;
   }

   getALl():Summerdetails[]{
    return [
     
      {
        id: 25,
        name: 'Vue Tank Top',
        price:299,
        favorite: false,
        discount:'10% Off',
        star:4.0,
        buys:'(2404)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-athletic-heather-front-60e5c73c24089_540x.jpg?v=1625671490',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-athletic-heather-front-60e5c73c24089_540x.jpg?v=1625671490'
      },
      {
        id: 26,
        name: 'React Tank Top',
        price:249,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(1542)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-white-front-60e5c6ed65777_540x.jpg?v=1625671414',
         imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-red-front-60e5c6ed65ad9_540x.jpg?v=1625671417'
      },
      {
        id: 27,
        name: 'React Tank Top',
        price:249,
        favorite: false,
        discount:'5% Off',
        star:4,
        buys:'(1025)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-red-front-60e5c6ed65ad9_540x.jpg?v=1625671417',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-red-front-60e5c6ed65ad9_540x.jpg?v=1625671417'
      },
      {
        id: 28,
        name: 'Backend Dev Trucker Cap',
        price:399,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(547)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/retro-trucker-hat-black-white-front-60eca3d220780_540x.jpg?v=1626121174',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/retro-trucker-hat-black-white-front-60eca3d220780_540x.jpg?v=1626121174'
      },
      {
        id: 29,
        name: 'Frontend Dev Trucker Cap',
        price:399,
        favorite: false,
        discount:'15% Off',
        star:3.8,
        buys:'(415)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/retro-trucker-hat-black-front-60eca428caf12_540x.jpg?v=1626121264',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/retro-trucker-hat-black-white-front-60eca3d2208a1_540x.jpg?v=1626121175'
      },
      {
        id: 30,
        name: 'Mobile App Dev Truker Cap',
        price:349,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(354)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/retro-trucker-hat-white-front-60eca656e6dd3_540x.jpg?v=1626121818',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/retro-trucker-hat-white-front-60eca656e6dd3_540x.jpg?v=1626121818'
      },
      {
        id: 31,
        name: 'Mobile App Dev Truker Cap',
        price:349,
        favorite: false,
        discount:'22% Off',
        star:4.2,
        buys:'(587)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/retro-trucker-hat-pink-front-60eca656e6f03_540x.jpg?v=1626121819',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/retro-trucker-hat-pink-front-60eca656e6f03_540x.jpg?v=1626121819'
      },
      {
        id: 32,
        name: 'Customised Tank Top',
        price:299,
        favorite: false,
        discount:'17% Off',
        star:4.9,
        buys:'(198)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-oatmeal-triblend-front-60e5ddc118760_540x.jpg?v=1625677255',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-oatmeal-triblend-front-60e5ddc118760_540x.jpg?v=1625677255'
      },
      {
        id: 33,
        name: 'Customised Tank Top',
        price:249,
        favorite: false,
        discount:'18% Off',
        star:4.1,
        buys:'(185)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-athletic-heather-front-60e5ddc118a1e_540x.jpg?v=1625677258',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-athletic-heather-front-60e5ddc118a1e_540x.jpg?v=1625677258'
      },
      {
        id: 34,
        name: 'Angular Tank Top',
        price:299,
        favorite: false,
        discount:'5% Off',
        star:4.0,
        buys:'(508)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-athletic-heather-front-60e5c5eddff40_540x.jpg?v=1625671159',
        imageUrl2:'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-athletic-heather-front-60e5c5eddff40_540x.jpg?v=1625671159'
      },
      {
        id: 35,
        name: 'Angular Tank Top',
        price:249,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(320)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-true-royal-front-60e5c5eddfd4a_540x.jpg?v=1625671157',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-true-royal-front-60e5c5eddfd4a_540x.jpg?v=1625671157'
      },
      {
        id: 36,
        name: 'React Tank Top',
        price:299,
        favorite: false,
        discount:'20% Off',
        star:4.5,
        buys:'(450)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-oatmeal-triblend-front-60e5c6ed65d4b_540x.jpg?v=1625671421',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-tank-top-oatmeal-triblend-front-60e5c6ed65d4b_540x.jpg?v=1625671421'
      }
    ];
  }
}

