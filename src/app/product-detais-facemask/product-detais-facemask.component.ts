import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceMaskDetails } from '../models/facemaskdetails';
import { CartService } from '../services/cart.service';
import { FacemasksService } from '../services/products/facemasks.service';

@Component({
  selector: 'app-product-detais-facemask',
  templateUrl: './product-detais-facemask.component.html',
  styleUrls: ['./product-detais-facemask.component.css']
})
export class ProductDetaisFacemaskComponent implements OnInit {
  facemask!:FaceMaskDetails;

  constructor(private activatedRoute:ActivatedRoute,
    private facemaskServices:FacemasksService, private cartService:CartService,
    private router:Router) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.facemask = facemaskServices.getFaceMaskById(params['id'])
      })
     }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.facemask);
    this.router.navigateByUrl('/addtocart')
  }

}
