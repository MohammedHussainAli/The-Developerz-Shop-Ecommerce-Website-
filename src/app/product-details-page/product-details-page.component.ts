import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tshirtdetails } from '../models/tshirtdetail';
import { CartService } from '../services/cart.service';
import { TshirtsService } from '../services/products/tshirts.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {
  tshirt!:Tshirtdetails;
  constructor(private activatedRoute:ActivatedRoute,
    private tshirtServices:TshirtsService, private cartService:CartService,
    private router:Router) { 
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.tshirt = tshirtServices.getTshirtById(params['id'])
      })
    }

  ngOnInit(): void {
  }
addToCart(){
  this.cartService.addToCart(this.tshirt);
  this.router.navigateByUrl('/addtocart')
}
}
