import { Injectable } from '@angular/core';
import { FaceMaskDetails } from 'src/app/models/facemaskdetails';

@Injectable({
  providedIn: 'root'
})
export class FacemasksService {

  constructor() { }

  getFaceMaskById(id:number): FaceMaskDetails{
    return this.getALl().find(facemask => facemask.id == id)!;
  }
  getALl():FaceMaskDetails[]{
    return [
      {
    id: 61,
    name: 'Angular Premium Face Mask',
    price:150,
    favorite: false,
    discount:'10% Off',
    star:4.0,
    buys:'(2404)',
    imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-black-600439c1899aa_540x.jpg?v=1610889669',
    imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-black-600439c189a43_540x.jpg?v=1610889671'
  },
  {
    id: 162,
    name: 'Kotlin Premium Face Mask',
    price:160,
    favorite: false,
    discount:'18% Off',
    star:3.8,
    buys:'(1542)',
    imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-black-6004488d87fff_540x.jpg?v=1610893458',
     imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-black-6004488d8826c_540x.jpg?v=1610893460'
  },
  {
    id: 63,
    name: 'Typescript Premium Face Mask',
    price:199,
    favorite: false,
    discount:'5% Off',
    star:4,
    buys:'(1025)',
    imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-black-6004492b03120_540x.jpg?v=1610893616',
    imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-black-6004492b031b7_540x.jpg?v=1610893618'
  },
  {
    id: 64,
    name: 'GraphQL Premium Face Mask',
    price:199,
    favorite: false,
    discount:'10% Off',
    star:3.5,
    buys:'(547)',
    imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-black-600448cc5284d_540x.jpg?v=1610893521',
    imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-black-600448cc5292e_540x.jpg?v=1610893523'
  },
  {
    id: 65,
    name: 'Vue Premium Face Mask',
    price:149,
    favorite: false,
    discount:'15% Off',
    star:3.8,
    buys:'(415)',
    imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-black-600449809c904_540x.jpg?v=1610893701',
    imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-black-600449809cb9c_540x.jpg?v=1610893703'
  },
  {
    id: 66,
    name: 'The Developer Premium Face Mask',
    price:199,
    favorite: false,
    discount:'18% Off',
    star:3.8,
    buys:'(354)',
    imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-white-6007eec4d8f52_540x.jpg?v=1611132619',
    imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-black-6007eec4d9182_540x.jpg?v=1611132622'
  },
  {
    id: 67,
    name: 'Python Premium Face Mask',
    price:199,
    favorite: false,
    discount:'22% Off',
    star:4.2,
    buys:'(587)',
    imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-black-60043a77c5d3e_540x.jpg?v=1610889855',
    imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-white-60043a77c5efb_540x.jpg?v=1610889856'
  },
  {
    id: 68,
    name: 'Docker Premium Face Mask',
    price:249,
    favorite: false,
    discount:'17% Off',
    star:4.9,
    buys:'(198)',
    imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-black-60043a18225cc_540x.jpg?v=1610889757',
    imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-white-60043a182277b_540x.jpg?v=1610889758'
  },
  {
    id: 69,
    name: 'Angula Premium Face Mask',
    price:149,
    favorite: false,
    discount:'18% Off',
    star:4.1,
    buys:'(185)',
    imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-white-600439c189af1_540x.jpg?v=1610889673',
    imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-white-600439c189b23_540x.jpg?v=1610889675'
  },
  {
    id: 70,
    name: 'Kotli Premium Face Mask',
    price:149,
    favorite: false,
    discount:'5% Off',
    star:4.0,
    buys:'(508)',
    imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-white-6004488d883bb_540x.jpg?v=1610893463',
    imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-white-6004488d88477_540x.jpg?v=1610893466'
  },
  {
    id: 71,
    name: 'Vu Premium Face Mask',
    price:149,
    favorite: false,
    discount:'10% Off',
    star:3.5,
    buys:'(320)',
    imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-white-600449809ccd7_540x.jpg?v=1610893705',
    imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-white-600449809ce5d_540x.jpg?v=1610893707'
  },
  {
    id: 72,
    name: 'Th Developer Premium Face Mask',
    price:199,
    favorite: false,
    discount:'20% Off',
    star:4.5,
    buys:'(450)',
    imageUrl1: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-white-6007eec4d9223_540x.jpg?v=1611132625',
    imageUrl2: 'https://cdn.shopify.com/s/files/1/0528/4148/0360/products/all-over-print-premium-face-mask-white-6007eec4d9253_540x.jpg?v=1611132626'
  }

    ];





  }
}
