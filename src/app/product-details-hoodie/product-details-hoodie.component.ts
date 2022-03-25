import { Component, OnInit } from '@angular/core';
import { HoodieDetails } from '../models/hoodiedetails';
import { HoodieService } from '../services/products/hoodie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details-hoodie',
  templateUrl: './product-details-hoodie.component.html',
  styleUrls: ['./product-details-hoodie.component.css']
})
export class ProductDetailsHoodieComponent implements OnInit {
  hoodie!:HoodieDetails;

  constructor(private hoodieservice:HoodieService, private activatedRoute:ActivatedRoute,
    private router:Router, private cartService:CartService) { 
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.hoodie = hoodieservice.getHoodieById(params['id'])
     })
    }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.hoodie);
    this.router.navigateByUrl('/addtocart')
}
}
