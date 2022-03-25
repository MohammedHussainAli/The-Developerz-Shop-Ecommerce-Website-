import { Injectable } from '@angular/core';
import { SweatshirtDetails } from 'src/app/models/seatshirtdetails';

@Injectable({
  providedIn: 'root'
})
export class SweatshirtsService {

  constructor() { }
  
  getSweatShirtsById(id:number): SweatshirtDetails{
    return this.getALl().find(sweatshirt => sweatshirt.id == id)!;
   }


   getALl():SweatshirtDetails[]{
    return [
      {
        id: 13,
        name: 'Javascript Sweatshirt',
        price:899,
        favorite: false,
        discount:'10% Off',
        star:4.0,
        buys:'(2404)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-black-front-602eb03e6ed07_360x.jpg?v=1613672519',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-black-front-602eb03e6ef53_1800x1800.jpg?v=1613672520'
      },
      {
        id: 14,
        name: 'Angular Sweatshirt',
        price:750,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(1542)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-navy-front-602e994035d87_1800x1800.jpg?v=1613666632',
         imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-navy-front-602e994036453_1800x1800.jpg?v=1613666633'
      },
      {
        id: 15,
        name: 'Node-JS Sweatshirt',
        price:699,
        favorite: false,
        discount:'5% Off',
        star:4,
        buys:'(1025)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-black-front-602eb233c6e92_540x.jpg?v=1613673018',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-black-front-602eb233c7128_540x.jpg?v=1613673019'
      },
      {
        id: 16,
        name: 'Vue Sweatshirt',
        price:799,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(547)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-white-front-602e9edb2c35d_360x.jpg?v=1613668067',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-white-front-602e9edb2cf1c_1800x1800.jpg?v=1613668068'
      },
      {
        id: 17,
        name: 'React Sweatshirt',
        price:899,
        favorite: false,
        discount:'15% Off',
        star:3.8,
        buys:'(415)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-indigo-blue-front-602e9c306de44_1800x1800.jpg?v=1613667390',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-premium-t-shirt-heather-midnight-navy-front-604522da57bd8_1800x1800.jpg?v=1615143653'
      },
      {
        id: 18,
        name: 'Get-Shit-Done Sweatshirt',
        price:649,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(354)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-dark-heather-front-602e99e27ebeb_1800x1800.jpg?v=1613666795',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-dark-heather-front-602e99e27f92c_540x.jpg?v=1613666797'
      },
      {
        id: 19,
        name: 'Android Sweatshirt',
        price:699,
        favorite: false,
        discount:'22% Off',
        star:4.2,
        buys:'(587)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-dark-heather-front-602eb1a1ce906_1800x1800.jpg?v=1613672873',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-dark-heather-front-602eb1a1cf3af_540x.jpg?v=1613672874'
      },
      {
        id: 20,
        name: 'Backend-Dev Sweatshirt',
        price:799,
        favorite: false,
        discount:'17% Off',
        star:4.9,
        buys:'(198)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-black-front-602e97e032c9c_540x.jpg?v=1613666284',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-black-front-602e97e032f26_1800x1800.jpg?v=1613666285'
      },
      {
        id: 21,
        name: 'Full-Stack Sweatshirt',
        price:749,
        favorite: false,
        discount:'18% Off',
        star:4.1,
        buys:'(185)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-indigo-blue-front-602e953a28a9c_540x.jpg?v=1613665605',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-indigo-blue-front-602e953a297c9_540x.jpg?v=1613665607'
      },
      {
        id: 22,
        name: 'Docker Sweatshirt',
        price:699,
        favorite: false,
        discount:'5% Off',
        star:4.0,
        buys:'(508)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-sport-grey-front-602e9b08620f4_540x.jpg?v=1613667087',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-sport-grey-front-602e9b08628ec_540x.jpg?v=1613667089'
      },
      {
        id: 23,
        name: 'Typescript Sweatshirt',
        price:549,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(320)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-navy-front-602eb44a73ca0_540x.jpg?v=1613673558',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-black-front-602eb44a741cf_540x.jpg?v=1613673559'
      },
      {
        id: 24,
        name: 'Python Sweatshirt',
        price:699,
        favorite: false,
        discount:'20% Off',
        star:4.5,
        buys:'(450)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-white-front-602eb0ec82842_540x.jpg?v=1613672694',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-crew-neck-sweatshirt-white-front-602eb0ec8321c_540x.jpg?v=1613672695'
      }
    ];
  }





}
