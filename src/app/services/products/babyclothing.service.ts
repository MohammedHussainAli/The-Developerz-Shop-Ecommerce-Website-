import { Injectable } from '@angular/core';
import { BabyClothingDetails } from 'src/app/models/babyclothingdetails';

@Injectable({
  providedIn: 'root'
})
export class BabyclothingService {

  constructor() { }

  getBabyClothingById(id:number): BabyClothingDetails{
    return this.getALl().find(babyclothing => babyclothing.id == id)!;
   }
   getALl():BabyClothingDetails[]{
    return [
      {
        id: 49,
        name: 'Angular Baby Short Sleev',
        price:399,
        favorite: false,
        discount:'10% Off',
        star:4.0,
        buys:'(2404)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-black-front-601167ff3f310_540x.jpg?v=1611753477',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-black-front-601167ff3f310_540x.jpg?v=1611753477'
      },
      {
        id: 50,
        name: 'It works on my Machine Baby Short Sleev',
        price:399,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(1542)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-pink-front-60116a710ef76_540x.jpg?v=1611754108',
         imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-pink-front-60116a710ef76_540x.jpg?v=1611754108'
      },
      {
        id: 51,
        name: 'Angular Baby Short Sleev',
        price:349,
        favorite: false,
        discount:'5% Off',
        star:4,
        buys:'(1025)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-heather-columbia-blue-front-601167ff3f425_540x.jpg?v=1611753480',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-heather-columbia-blue-front-601167ff3f425_540x.jpg?v=1611753480'
      },
      {
        id: 52,
        name: 'React Baby Short Sleev',
        price:399,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(547)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-athletic-heather-front-601168804d5c8_540x.jpg?v=1611754697',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-athletic-heather-front-601168804d5c8_540x.jpg?v=1611754697'
      },
      {
        id: 53,
        name: 'React Baby Short Sleev',
        price:299,
        favorite: false,
        discount:'15% Off',
        star:3.8,
        buys:'(415)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-black-front-601168804d4c1_540x.jpg?v=1611754697',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-black-front-601168804d4c1_540x.jpg?v=1611754697'
      },
      {
        id: 54,
        name: 'Get-Shit-Done Baby Short Sleev',
        price:249,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(354)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-white-front-6065e696cc927_360x.jpg?v=1617290910',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-white-front-6065e696cc927_360x.jpg?v=1617290910'
      },
      {
        id: 55,
        name: 'Vue Baby Short Sleev',
        price:299,
        favorite: false,
        discount:'22% Off',
        star:4.2,
        buys:'(587)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-dark-grey-heather-front-601169107fcdd_360x.jpg?v=1611754403',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-dark-grey-heather-front-601169107fcdd_360x.jpg?v=1611754403'
      },
      {
        id: 56,
        name: 'trust me Baby Short Sleev',
        price:299,
        favorite: false,
        discount:'17% Off',
        star:4.9,
        buys:'(198)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-yellow-front-602ec9ea7fbda_360x.jpg?v=1613679097',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-yellow-front-602ec9ea7fbda_360x.jpg?v=1613679097'
      },
      {
        id: 57,
        name: 'Sudo Bring me Cofee Baby Short Sleev',
        price:249,
        favorite: false,
        discount:'18% Off',
        star:4.1,
        buys:'(185)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-pink-front-602fa58826af7_360x.jpg?v=1613735309',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-pink-front-602fa58826af7_360x.jpg?v=1613735309'
      },
      {
        id: 58,
        name: 'Vue Baby Short Sleev',
        price:299,
        favorite: false,
        discount:'5% Off',
        star:4.0,
        buys:'(508)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-black-front-601169107fc59_540x.jpg?v=1611754403',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-black-front-601169107fc59_540x.jpg?v=1611754403'
      },
      {
        id: 59,
        name: 'Get Shit Done Baby Short Sleev',
        price:249,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(320)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-yellow-front-6065e696ccc03_540x.jpg?v=1617290915',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-yellow-front-6065e696ccc03_540x.jpg?v=1617290915'
      },
      {
        id: 60,
        name: 'Have you tried Baby Short Sleev',
        price:299,
        favorite: false,
        discount:'20% Off',
        star:4.5,
        buys:'(450)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-white-front-601169919ecf9_540x.jpg?v=1613679143',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/baby-short-sleeve-one-piece-white-front-601169919ecf9_540x.jpg?v=1613679143'
      }
    ];
  }
}
