import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WallartDetails } from '../models/wallartdetails';
import { CartService } from '../services/cart.service';
import { WallartsService } from '../services/products/wallarts.service';

@Component({
  selector: 'app-product-details-wallart',
  templateUrl: './product-details-wallart.component.html',
  styleUrls: ['./product-details-wallart.component.css']
})
export class ProductDetailsWallartComponent implements OnInit {
  wallart!:WallartDetails;
  constructor(private activatedRoute:ActivatedRoute,
    private wallartServices:WallartsService,
    private cartService:CartService, private router:Router) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.wallart = wallartServices.getWallartById(params['id'])
      })
     }

  ngOnInit(): void {
  }
addToCart(){
  this.cartService.addToCart(this.wallart);
  this.router.navigateByUrl('/addtocart')
}
}
