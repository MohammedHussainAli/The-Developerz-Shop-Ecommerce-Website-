import { Injectable } from '@angular/core';
import { BagPackDetails } from 'src/app/models/bagpacks';

@Injectable({
  providedIn: 'root'
})
export class BagpackService {

  constructor() { }
  getBackPackById(id:number): BagPackDetails{
    return this.getALl().find(bagpack => bagpack.id == id)!;
   }
   getALl():BagPackDetails[]{

    return [
      {
        id: 85,
        name: 'Signature Champion Bagpack',
        price:1999,
        favorite: false,
        discount:'10% Off',
        star:4.0,
        buys:'(2404)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/champion-backpack-heather-black-black-front-6012c0d0d15e8_540x.jpg?v=1611841783',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/champion-backpack-heather-black-black-front-6012c0d0d1799_540x.jpg?v=1611841758'
      },
      {
        id: 86,
        name: 'It Works on my Machine Laptop Sleev',
        price:549,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(1542)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-15-in-600445e492dbd_540x.jpg?v=1610892776',
         imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-13-in-600445e492e2e_540x.jpg?v=1610892777'
      },
      {
        id: 87,
        name: 'Its a feature Laptop Sleev',
        price:599,
        favorite: false,
        discount:'5% Off',
        star:4,
        buys:'(1025)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-13-in-600445860b91d_540x.jpg?v=1610892681',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-13-in-600445860b91d_540x.jpg?v=1610892681'
      },
      {
        id: 88,
        name: 'Full Stack Dev Organic Tote Bag',
        price:149,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(547)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/large-eco-tote-oyster-6004440754823_540x.jpg?v=1610892300',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/large-eco-tote-oyster-6004440754823_540x.jpg?v=1610892300'
      },
      {
        id: 89,
        name: 'CSS Laptop Sleev',
        price:599,
        favorite: false,
        discount:'15% Off',
        star:3.8,
        buys:'(415)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-13-in-6004328b8a539_540x.jpg?v=1610887823',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-13-in-6004328b8a539_540x.jpg?v=1610887823'
      },
      {
        id: 90,
        name: 'Customised Laptop Sleev',
        price:549,
        favorite: false,
        discount:'18% Off',
        star:3.8,
        buys:'(354)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-15-in-6007f2d06321e_540x.jpg?v=1611133652',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-15-in-6007f2d06321e_540x.jpg?v=1611133652'
      },
      {
        id: 91,
        name: 'Full Stack Dev Organic Tote Bag',
        price:149,
        favorite: false,
        discount:'22% Off',
        star:4.2,
        buys:'(587)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/large-eco-tote-oyster-60044407548c1_540x.jpg?v=1610892301',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/large-eco-tote-oyster-60044407548c1_540x.jpg?v=1610892301'
      },
      {
        id: 92,
        name: 'Developer Bagpack',
        price:1299,
        favorite: false,
        discount:'17% Off',
        star:4.9,
        buys:'(198)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-backpack-white-6007f4d89e141_540x.jpg?v=1611134175',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-backpack-white-6007f4d89e141_540x.jpg?v=1611134175'
      },
      {
        id: 93,
        name: 'Trust me Laptop Sleev',
        price:549,
        favorite: false,
        discount:'18% Off',
        star:4.1,
        buys:'(185)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-13-in-front-60107b78b79de_540x.jpg?v=1611692924',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-13-in-front-60107b78b79de_540x.jpg?v=1611692924'
      },
      {
        id: 94,
        name: 'Signature Bagpack',
        price:1999,
        favorite: false,
        discount:'5% Off',
        star:4.0,
        buys:'(508)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/champion-backpack-heather-black-black-front-6012c0d0d1761_540x.jpg?v=1611841757',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/champion-backpack-heather-black-black-front-6012c0d0d1761_540x.jpg?v=1611841757'
      },
      {
        id: 95,
        name: 'Customised Laptop Sleev',
        price:599,
        favorite: false,
        discount:'10% Off',
        star:3.5,
        buys:'(320)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-13-in-600445860b91d_540x.jpg?v=1610892681',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-13-in-600445860b91d_540x.jpg?v=1610892681'
      },
      {
        id: 96,
        name: 'Customised laptop Sleev',
        price:549,
        favorite: false,
        discount:'20% Off',
        star:4.5,
        buys:'(450)',
        imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-15-in-600445e492dbd_540x.jpg?v=1610892776',
        imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/laptop-sleeve-15-in-600445e492dbd_540x.jpg?v=1610892776'
      }

    ];

}
      
}
