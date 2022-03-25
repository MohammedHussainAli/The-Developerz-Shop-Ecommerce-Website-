import { Injectable } from '@angular/core';
import { StickerDetails } from 'src/app/models/stickerdetails';

@Injectable({
  providedIn: 'root'
})
export class StickersService {

  constructor() { }
  getStickerById(id:number): StickerDetails{
    return this.getALl().find(sticker => sticker.id == id)!;
  }
  getALl():StickerDetails[]{
    return[
      {
        id: 97,
        name: 'Angular Bubble Free Stickers',
        price:150,
        favorite: false,
        discount:'10% Off',
        star:4.0,
        buys:'(2404)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-600442f671b6c_360x.jpg?v=1610892026',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-600442f671b6c_360x.jpg?v=1610892026'
      },
      {
        id: 98,
        name: 'Customised Bubble Free Stickers',
        price:160,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(1542)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-6004331784f7c_360x.jpg?v=1610887964',
         imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-6004331784f7c_360x.jpg?v=1610887964'
      },
      {
        id: 99,
        name: 'Typescript Bubble Free Stickers',
        price:199,
        favorite: false,
        discount:'5% Off',
        star:4,
        buys:'(1025)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-6004429494054_540x.jpg?v=1610891928',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-6004429494054_540x.jpg?v=1610891928'
      },
      {
        id: 100,
        name: 'GraphQL Bubble Free Stickers',
        price:199,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(547)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-6004423b88b41_540x.jpg?v=1610891840',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-6004423b88b41_540x.jpg?v=1610891840'
      },
      {
        id: 101,
        name: 'Vue Bubble Free Stickers',
        price:149,
        favorite: false,
        discount:'15% Off',
        star:3.8,
        buys:'(415)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-5.5x5.5-6007f015b62d1_360x.jpg?v=1611132952',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-5.5x5.5-6007f015b62d1_360x.jpg?v=1611132952'
      },
      {
        id: 102,
        name: 'The Developer Bubble Free Stickers',
        price:199,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(354)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-5.5x5.5-6007f18948ff0_360x.jpg?v=1611133325',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-5.5x5.5-6007f18948ff0_360x.jpg?v=1611133325'
      },
      {
        id: 103,
        name: 'Python Bubble Free Stickers',
        price:199,
        favorite: false,
        discount:'22% Off',
        star:4.2,
        buys:'(587)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-5.5x5.5-6007ef8b8264e_360x.jpg?v=1611132815',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-5.5x5.5-6007ef8b8264e_360x.jpg?v=1611132815'
      },
      {
        id: 104,
        name: 'Docker Bubble Free Stickers',
        price:249,
        favorite: false,
        discount:'17% Off',
        star:4.9,
        buys:'(198)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-6004432238ae7_360x.jpg?v=1610892070',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-6004432238ae7_360x.jpg?v=1610892070'
      },
      {
        id: 105,
        name: 'PHP Bubble Free Stickers',
        price:149,
        favorite: false,
        discount:'18% Off',
        star:4.1,
        buys:'(185)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-default-605bb5470f2ab_360x.jpg?v=1616622923',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-default-605bb5470f2ab_360x.jpg?v=1616622923'
      },
      {
        id: 106,
        name: 'Backend Dev Bubble Free Stickers',
        price:149,
        favorite: false,
        discount:'5% Off',
        star:4.0,
        buys:'(508)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-5.5x5.5-6007f1ae6f7eb_360x.jpg?v=1611133362',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-5.5x5.5-6007f1ae6f7eb_360x.jpg?v=1611133362'
      },
      {
        id: 107,
        name: 'Frontend Dev Bubble Free Stickers',
        price:549,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(320)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-5.5x5.5-6004335b45dc0_360x.jpg?v=1610888031',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-5.5x5.5-6004335b45dc0_360x.jpg?v=1610888031'
      },
      {
        id: 108,
        name: 'Internet Explorer Bubble Free Stickers',
        price:199,
        favorite: false,
        discount:'20% Off',
        star:4.5,
        buys:'(450)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-default-6012c20cc1612_360x.jpg?v=1611842067',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/kiss-cut-stickers-3x3-default-6012c20cc1612_360x.jpg?v=1611842067'
      }
    ];
  }
}
