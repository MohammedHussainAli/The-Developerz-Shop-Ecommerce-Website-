import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StickerDetails } from '../models/stickerdetails';
import { CartService } from '../services/cart.service';
import { StickersService } from '../services/products/stickers.service';

@Component({
  selector: 'app-product-details-stickers',
  templateUrl: './product-details-stickers.component.html',
  styleUrls: ['./product-details-stickers.component.css']
})
export class ProductDetailsStickersComponent implements OnInit {
  sticker!:StickerDetails;
  constructor(private activatedRoute:ActivatedRoute,
    private stickerServices:StickersService,private cartService:CartService,
    private router:Router) { 
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.sticker = stickerServices.getStickerById(params['id'])
      })
    }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.sticker);
    this.router.navigateByUrl('/addtocart')
  }

}
