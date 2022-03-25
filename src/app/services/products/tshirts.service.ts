import { Injectable } from '@angular/core';
import { Tshirtdetails } from 'src/app/models/tshirtdetail';

@Injectable({
  providedIn: 'root'
})
export class TshirtsService {

  constructor() { }

  getTshirtById(id:number): Tshirtdetails{
   return this.getALl().find(tshirt => tshirt.id == id)!;
  }

  getALl():Tshirtdetails[]{
    return [
      
      {
        id: 1,
        name: 'Angular T-Shirt',
        price:399,
        favorite: false,
        discount:'10% Off',
        star:4.0,
        buys:'(2404)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-true-royal-front-601befd7623e4_360x.jpg?v=1612443619',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-true-royal-front-601befd764199_1800x1800.jpg?v=1612443622'
      },
      {
        id: 2,
        name: 'Javascript T-Shirt',
        price:349,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(1542)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-black-heather-front-601bf44228f1f_360x.jpg?v=1612444748',
         imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-black-heather-front-601bf44229ca2_1800x1800.jpg?v=1612444750'
      },
      {
        id: 3,
        name: 'Node-JS T-Shirt',
        price:449,
        favorite: false,
        discount:'5% Off',
        star:4,
        buys:'(1025)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-forest-front-604521c7cbc25_360x.jpg?v=1615143381',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-forest-front-604521c7cc8e6_1800x1800.jpg?v=1615143383'
      },
      {
        id: 4,
        name: 'Flutter T-Shirt',
        price:399,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(547)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-true-royal-front-602ae5653541d_360x.jpg?v=1613423981',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-true-royal-front-602ae56535ec7_1800x1800.jpg?v=1613423983'
      },
      {
        id: 5,
        name: 'Typescript T-Shirt',
        price:299,
        favorite: false,
        discount:'15% Off',
        star:3.8,
        buys:'(415)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-heather-midnight-navy-front-604522da568f2_540x.jpg?v=1615143651',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-heather-midnight-navy-front-604522da57bd8_1800x1800.jpg?v=1615143653'
      },
      {
        id: 6,
        name: 'Get-Shit-Done T-Shirt',
        price:449,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(354)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-soft-cream-front-602ae1241253d_360x.jpg?v=1613422898',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-soft-cream-front-602ae1241391c_1800x1800.jpg?v=1613422900'
      },
      {
        id: 7,
        name: 'React T-Shirt',
        price:399,
        favorite: false,
        discount:'22% Off',
        star:4.2,
        buys:'(587)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-dark-grey-heather-front-601bf0986dbcb_360x.jpg?v=1612443814',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-dark-grey-heather-front-601bf0986f0df_1800x1800.jpg?v=1612443817'
      },
      {
        id: 8,
        name: 'Backend-Dev T-Shirt',
        price:399,
        favorite: false,
        discount:'17% Off',
        star:4.9,
        buys:'(198)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-black-heather-front-602c20eeb40c2_360x.jpg?v=1613504766',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-black-heather-front-602c20eeb49b0_1800x1800.jpg?v=1613504768'
      },
      {
        id: 9,
        name: 'Full-Stack T-Shirt',
        price:349,
        favorite: false,
        discount:'18% Off',
        star:4.1,
        buys:'(185)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-navy-front-602c214e8b511_360x.jpg?v=1613504875',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-navy-front-602c214e8bb84_1800x1800.jpg?v=1613504876'
      },
      {
        id: 10,
        name: 'Docker T-Shirt',
        price:399,
        favorite: false,
        discount:'5% Off',
        star:4.0,
        buys:'(508)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-mustard-60042b7adf49b_360x.jpg?v=1610886017',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-mustard-60042b7adfc01_1800x1800.jpg?v=1610886019'
      },
      {
        id: 11,
        name: 'Android T-Shirt',
        price:449,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(320)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-black-front-601be90df115d_360x.jpg?v=1612441883',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-black-front-601be90df1318_1800x1800.jpg?v=1612441885'
      },
      {
        id: 12,
        name: 'Frontend Dev T-Shirt',
        price:399,
        favorite: false,
        discount:'20% Off',
        star:4.5,
        buys:'(450)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-true-royal-front-602c207fd7c15_360x.jpg?v=1613504652',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-true-royal-front-602c22832b2af_1800x1800.jpg?v=1613505213'
      }
    ];
  }
}
