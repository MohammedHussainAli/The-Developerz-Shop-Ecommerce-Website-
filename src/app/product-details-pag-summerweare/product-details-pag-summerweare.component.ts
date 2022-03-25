import { Component, OnInit } from '@angular/core';
import { Summerdetails } from '../models/summerdetails';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { SummerwearService } from '../services/products/summerwear.service';
@Component({
  selector: 'app-product-details-pag-summerweare',
  templateUrl: './product-details-pag-summerweare.component.html',
  styleUrls: ['./product-details-pag-summerweare.component.css']
})
export class ProductDetailsPagSummerweareComponent implements OnInit {
  summerwear!:Summerdetails;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,
    private cartService:CartService, private summerwearservice:SummerwearService
    ) { 
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.summerwear = summerwearservice.getSummerWearById(params['id'])
    })

  }
  ngOnInit(): void {
    
  }
  addToCart(){
    this.cartService.addToCart(this.summerwear);
    this.router.navigateByUrl('/addtocart')
}

}
