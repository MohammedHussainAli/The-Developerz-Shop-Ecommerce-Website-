import { Component, OnInit } from '@angular/core';
import { MugDetails } from '../models/mugdetails';
import { MugsService } from '../services/products/mugs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details-mugs',
  templateUrl: './product-details-mugs.component.html',
  styleUrls: ['./product-details-mugs.component.css']
})
export class ProductDetailsMugsComponent implements OnInit {
  mug!:MugDetails;
  constructor(private activatedRoute:ActivatedRoute, private mugServices:MugsService,
    private router:Router, private cartService:CartService) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.mug= mugServices.getMugById(params['id'])
     })
     }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.mug);
    this.router.navigateByUrl('/addtocart')
}

}
