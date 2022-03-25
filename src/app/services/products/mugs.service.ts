import { Injectable } from '@angular/core';
import { MugDetails } from 'src/app/models/mugdetails';

@Injectable({
  providedIn: 'root'
})
export class MugsService {

  constructor() { }
  getMugById(id:number): MugDetails{
    return this.getALl().find(mug => mug.id == id)!;
   }
   getALl():MugDetails[]{

    return [
      {
        id: 73,
        name: 'Angular Mug',
        price:249,
        favorite: false,
        discount:'10% Off',
        star:4.0,
        buys:'(2404)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-ceramic-mug-with-color-inside-red-11oz-left-602ed1da8e07b_540x.jpg?v=1613681124',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-ceramic-mug-with-color-inside-red-11oz-right-602ed1da8e102_540x.jpg?v=1613681125'
      },
      {
        id: 74,
        name: 'React Mug',
        price:249,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(1542)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-ceramic-mug-with-color-inside-blue-11oz-right-602ed35606e69_540x.jpg?v=1613681500',
         imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-ceramic-mug-with-color-inside-blue-11oz-left-602ed35606f66_540x.jpg?v=1613681502'
      },
      {
        id: 75,
        name: 'It Works on my Machine Mug',
        price:299,
        favorite: false,
        discount:'5% Off',
        star:4,
        buys:'(1025)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-glossy-mug-11oz-office-environment-6013154525bf2_540x.jpg?v=1611863913',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-glossy-mug-11oz-cutting-board-6013154525b82_540x.jpg?v=1611863913'
      },
      {
        id: 76,
        name: 'Vue Mug',
        price:249,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(547)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-glossy-mug-11oz-handle-on-right-602ed48399530_540x.jpg?v=1613681805',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-glossy-mug-11oz-handle-on-left-602ed483995f6_540x.jpg?v=1613681806'
      },
      {
        id: 77,
        name: 'Javascript Mug',
        price:299,
        favorite: false,
        discount:'15% Off',
        star:3.8,
        buys:'(415)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-ceramic-mug-with-color-inside-yellow-11oz-left-602ed2f551170_540x.jpg?v=1613681400',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-ceramic-mug-with-color-inside-yellow-11oz-right-602ed2f551206_540x.jpg?v=1613681401'
      },
      {
        id: 78,
        name: 'Get-Shit-Done Mug',
        price:149,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(354)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-glossy-mug-11oz-handle-on-left-602ed11227c1c_540x.jpg?v=1613680918',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-glossy-mug-11oz-handle-on-right-602ed11227ca9_540x.jpg?v=1613680921'
      },
      {
        id: 79,
        name: 'CSS Mug',
        price:199,
        favorite: false,
        discount:'22% Off',
        star:4.2,
        buys:'(587)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-ceramic-mug-with-color-inside-red-11oz-60043ca5517f5_540x.jpg?v=1610890414',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-ceramic-mug-with-color-inside-red-11oz-60043ca5517c8_540x.jpg?v=1610890412'
      },
      {
        id: 80,
        name: 'Customised Mug',
        price:149,
        favorite: false,
        discount:'17% Off',
        star:4.9,
        buys:'(198)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-glossy-mug-11oz-handle-on-right-602ed6f4ef0e2_540x.jpg?v=1613682425',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-glossy-mug-11oz-handle-on-left-602ed6f4ef174_540x.jpg?v=1613682426'
      },
      {
        id: 81,
        name: 'Trust me im an Engineer Mug',
        price:199,
        favorite: false,
        discount:'18% Off',
        star:4.1,
        buys:'(185)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/glossy-black-magic-mug-handle-on-left-602ecd641042b_540x.jpg?v=1613679976',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/glossy-black-magic-mug-handle-on-right-602ecd6410492_540x.jpg?v=1613679977'
      },
      {
        id: 82,
        name: 'Docker Mug',
        price:299,
        favorite: false,
        discount:'5% Off',
        star:4.0,
        buys:'(508)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-ceramic-mug-with-color-inside-blue-11oz-right-602ed292254c2_540x.jpg?v=1613681311',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-ceramic-mug-with-color-inside-blue-11oz-left-602ed29225591_540x.jpg?v=1613681313'
      },
      {
        id: 83,
        name: 'Typescript Mug',
        price:299,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(320)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-glossy-mug-11oz-handle-on-right-602ed925413f2_540x.jpg?v=1613682988',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-glossy-mug-11oz-handle-on-left-602ed92541468_1800x1800.jpg?v=1613682989'
      },
      {
        id: 84,
        name: 'Python Mug',
        price:249,
        favorite: false,
        discount:'20% Off',
        star:4.5,
        buys:'(450)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-ceramic-mug-with-color-inside-yellow-11oz-left-602ed83beceb6_540x.jpg?v=1613682752',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/white-ceramic-mug-with-color-inside-blue-11oz-right-602ed83becf4f_540x.jpg?v=1613682753'
      }

    ];

}
}
