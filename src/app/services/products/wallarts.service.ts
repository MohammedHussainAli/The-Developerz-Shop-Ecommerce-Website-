import { Injectable } from '@angular/core';
import { WallartDetails } from 'src/app/models/wallartdetails';

@Injectable({
  providedIn: 'root'
})
export class WallartsService {

  constructor() { }
  getWallartById(id:number):WallartDetails{
    return this.getALl().find(wallart => wallart.id == id)!;
  }
  getALl():WallartDetails[]{
    return[
      {
        id: 109,
        name: 'Mindset Framed Posted',
        price:699,
        favorite: false,
        discount:'10% Off',
        star:4.0,
        buys:'(2404)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-framed-poster-_in_-black-16x16-person-602c68e915661_360x.jpg?v=1613523182',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-framed-poster-_in_-black-16x16-person-602c68e915661_360x.jpg?v=1613523182'
      },
      {
        id: 110,
        name: 'Late & Early morning Framed Poster',
        price:549,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(1542)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-framed-poster-_in_-black-18x18-person-602c6b0d31ed7_360x.jpg?v=1613523730',
         imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-framed-poster-_in_-black-18x18-person-602c6b0d31ed7_360x.jpg?v=1613523730'
      },
      {
        id:111,
        name: 'Get Shit Done Framed Poster',
        price:649,
        favorite: false,
        discount:'5% Off',
        star:4,
        buys:'(1025)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-framed-poster-_in_-black-12x12-person-602c68a273ee0_360x.jpg?v=1613523110',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-framed-poster-_in_-black-12x12-person-602c68a273ee0_360x.jpg?v=1613523110'
      },
      {
        id: 112,
        name: 'Work Hard in Silence Framed Poster',
        price:699,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(547)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-framed-poster-_in_-black-18x18-person-602c67fcc2e1e_360x.jpg?v=1613522946',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-framed-poster-_in_-black-18x18-person-602c67fcc2e1e_360x.jpg?v=1613522946'
      },
      {
        id: 113,
        name: 'It Works on my machine Poster',
        price:399,
        favorite: false,
        discount:'15% Off',
        star:3.8,
        buys:'(415)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-10x10-transparent-602c3a44eeb51_360x.jpg?v=1613511242',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-10x10-transparent-602c3a44eeb51_360x.jpg?v=1613511242'
      },
      {
        id: 114,
        name: 'Get Shit Done Poster',
        price:349,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(354)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-10x10-transparent-602c39d349aa6_360x.jpg?v=1613511128',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-10x10-transparent-602c39d349aa6_360x.jpg?v=1613511128'
      },
      {
        id: 115,
        name: 'Work Hard in Silence Poster',
        price:399,
        favorite: false,
        discount:'22% Off',
        star:4.2,
        buys:'(587)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-10x10-transparent-602c35ab0dd1f_360x.jpg?v=1613510064',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-10x10-transparent-602c35ab0dd1f_360x.jpg?v=1613510064'
      },
      {
        id: 116,
        name: 'Dont Limit Poster',
        price:399,
        favorite: false,
        discount:'17% Off',
        star:4.9,
        buys:'(198)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-10x10-transparent-602c360284e89_360x.jpg?v=1613510150',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-10x10-transparent-602c360284e89_360x.jpg?v=1613510150'
      },
      {
        id: 117,
        name: 'Have ou tried Poster',
        price:349,
        favorite: false,
        discount:'18% Off',
        star:4.1,
        buys:'(185)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-18x18-transparent-601070937fb4f_360x.jpg?v=1611690136',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-18x18-transparent-601070937fb4f_360x.jpg?v=1611690136'
      },
      {
        id: 118,
        name: 'I have no Idea Poster',
        price:299,
        favorite: false,
        discount:'5% Off',
        star:4.0,
        buys:'(508)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-16x16-6007f3900e704_360x.jpg?v=1611133843',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-16x16-6007f3900e704_360x.jpg?v=1611133843'
      },
      {
        id: 119,
        name: 'Comfort Zoe Poster',
        price:249,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(320)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-10x10-transparent-602c3657d6dd6_360x.jpg?v=1613510238',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-10x10-transparent-602c3657d6dd6_360x.jpg?v=1613510238'
      },
      {
        id: 120,
        name: 'Never Memorise Poster',
        price:299,
        favorite: false,
        discount:'20% Off',
        star:4.5,
        buys:'(450)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-14x14-6004373d199ff_360x.jpg?v=1610889024',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/enhanced-matte-paper-poster-_in_-14x14-6004373d199ff_360x.jpg?v=1610889024'
      }

    ];
  }
}
