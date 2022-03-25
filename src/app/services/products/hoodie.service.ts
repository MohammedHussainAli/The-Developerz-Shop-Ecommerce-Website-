import { Injectable } from '@angular/core';
import { HoodieDetails } from 'src/app/models/hoodiedetails';

@Injectable({
  providedIn: 'root'
})
export class HoodieService {

  constructor() { }
  
  getHoodieById(id:number): HoodieDetails{
    return this.getALl().find(hoodie => hoodie.id == id)!;
   }
 
    getALl():HoodieDetails[]{

      return [
        {
          id: 37,
          name: 'Angular Hoodie',
          price:999,
          favorite: false,
          discount:'10% Off',
          star:4.0,
          buys:'(2404)',
          imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-navy-front-602eea24b0c0e_540x.jpg?v=1613687342',
          imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-navy-front-602eea24b1223_540x.jpg?v=1613687344'
        },
        {
          id: 38,
          name: 'React Hoodie',
          price:949,
          favorite: false,
          discount:'18% Off',
          star:3.8,
          buys:'(1542)',
          imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-indigo-blue-front-602eeada74bb2_360x.jpg?v=1613687526',
           imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-indigo-blue-front-602eeada75bd6_360x.jpg?v=1613687528'
        },
        {
          id: 39,
          name: 'Node-JS Hoodie',
          price:899,
          favorite: false,
          discount:'5% Off',
          star:4,
          buys:'(1025)',
          imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-dark-heather-front-604524e1d5060_360x.jpg?v=1615144170',
          imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-dark-heather-front-604524e1d569e_360x.jpg?v=1615144171'
        },
        {
          id: 40,
          name: 'Vue Hoodie',
          price:949,
          favorite: false,
          discount:'10% Off',
          star:3.5,
          buys:'(547)',
          imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-sport-grey-front-602eeb72875a3_360x.jpg?v=1613687675',
          imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-sport-grey-front-602eeb7287d86_360x.jpg?v=1613687676'
        },
        {
          id: 41,
          name: 'Javascript Hoodie',
          price:999,
          favorite: false,
          discount:'15% Off',
          star:3.8,
          buys:'(415)',
          imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-black-600415851cf17_360x.jpg?v=1610880397',
          imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-black-600415851d2a0_360x.jpg?v=1610880399'
        },
        {
          id: 42,
          name: 'Get-Shit-Done Hoodie',
          price:949,
          favorite: false,
          discount:'18% Off',
          star:3.8,
          buys:'(354)',
          imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-white-front-602eeca4b9085_360x.jpg?v=1613687982',
          imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-white-front-602eeca4b980b_360x.jpg?v=1613687983'
        },
        {
          id: 43,
          name: 'CSS hoodie',
          price:899,
          favorite: false,
          discount:'22% Off',
          star:4.2,
          buys:'(587)',
          imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-light-pink-front-60367cef1e22c_360x.jpg?v=1614183670',
          imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-light-pink-front-60367cef1ea4d_360x.jpg?v=1614183671'
        },
        {
          id: 44,
          name: 'Backend-Dev Hoodie',
          price:999,
          favorite: false,
          discount:'17% Off',
          star:4.9,
          buys:'(198)',
          imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-black-front-60368e11df10e_360x.jpg?v=1614188058',
          imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-black-front-60368e11df351_360x.jpg?v=1614188060'
        },
        {
          id: 45,
          name: 'Frontend Dev Hoodie',
          price:949,
          favorite: false,
          discount:'18% Off',
          star:4.1,
          buys:'(185)',
          imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-white-front-60368bf061393_360x.jpg?v=1614187512',
          imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-white-front-60368bf062053_360x.jpg?v=1614187514'
        },
        {
          id: 46,
          name: 'Docker Hoodie',
          price:899,
          favorite: false,
          discount:'5% Off',
          star:4.0,
          buys:'(508)',
          imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-sport-grey-60042bc22ff5a_360x.jpg?v=1611521646',
          imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-white-60042bc230329_360x.jpg?v=1611521646'
        },
        {
          id: 47,
          name: 'Typescript Hoodie',
          price:999,
          favorite: false,
          discount:'10% Off',
          star:3.5,
          buys:'(320)',
          imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-white-front-602ee98391e20_360x.jpg?v=1613687178',
          imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-white-front-602ee98392c11_360x.jpg?v=1613687179'
        },
        {
          id: 48,
          name: 'Python Hoodie',
          price:949,
          favorite: false,
          discount:'20% Off',
          star:4.5,
          buys:'(450)',
          imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-black-6003f71598d22_360x.jpg?v=1617046983',
          imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/unisex-heavy-blend-hoodie-black-6003f71598fb4_360x.jpg?v=1617046983'
        }

      ];

}
}
