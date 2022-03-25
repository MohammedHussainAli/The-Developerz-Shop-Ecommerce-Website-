import { Component, OnInit } from '@angular/core';
import { SweatshirtDetails } from '../models/seatshirtdetails';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { SweatshirtsService } from '../services/products/sweatshirts.service';

@Component({
  selector: 'app-product-details-page-sweatshirt',
  templateUrl: './product-details-page-sweatshirt.component.html',
  styleUrls: ['./product-details-page-sweatshirt.component.css']
})
export class ProductDetailsPageSweatshirtComponent implements OnInit {
  sweatshirt!:SweatshirtDetails;
  constructor(private activatedRoute:ActivatedRoute, private sweatshirtServices:SweatshirtsService,
    private router:Router, private cartService:CartService) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.sweatshirt = sweatshirtServices.getSweatShirtsById(params['id'])
     })

}
  ngOnInit(): void {
    
  }
  addToCart(){
    this.cartService.addToCart(this.sweatshirt);
    this.router.navigateByUrl('/addtocart')
}
}
