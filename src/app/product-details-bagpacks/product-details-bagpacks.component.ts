import { Component, OnInit } from '@angular/core';
import { BagPackDetails } from '../models/bagpacks';
import { BagpackService } from '../services/products/bagpack.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details-bagpacks',
  templateUrl: './product-details-bagpacks.component.html',
  styleUrls: ['./product-details-bagpacks.component.css']
})
export class ProductDetailsBagpacksComponent implements OnInit {
  bagpack!:BagPackDetails;

  constructor(private bagpackservice:BagpackService, private activatedRoute:ActivatedRoute,
    private router:Router, private cartService:CartService) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.bagpack = bagpackservice.getBackPackById(params['id'])
     })
     }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.bagpack);
    this.router.navigateByUrl('/addtocart')
}

}
