import { Component, OnInit } from '@angular/core';
import { BabyClothingDetails } from '../models/babyclothingdetails';
import { BabyclothingService } from '../services/products/babyclothing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details-babyclothing',
  templateUrl: './product-details-babyclothing.component.html',
  styleUrls: ['./product-details-babyclothing.component.css']
})
export class ProductDetailsBabyclothingComponent implements OnInit {
  babyclothing!:BabyClothingDetails;

  constructor(private babyclothingservice:BabyclothingService, private activatedRoute:ActivatedRoute,
    private router:Router, private cartService:CartService ) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.babyclothing = babyclothingservice.getBabyClothingById(params['id'])
     })
     }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.babyclothing);
    this.router.navigateByUrl('/addtocart')
}

}
