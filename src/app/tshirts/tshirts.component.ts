import { Component, OnInit } from '@angular/core';
import { TshirtsService } from '../services/products/tshirts.service';
import { Tshirtdetails } from '../models/tshirtdetail';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.css']
})
export class TshirtsComponent implements OnInit {
  tshirt!:Tshirtdetails;
  tshirts:Tshirtdetails []=[]
  constructor(private ts:TshirtsService, private cartService:CartService,

    ) { }

  ngOnInit(): void {
    this.tshirts = this.ts.getALl(); //to get all the pics
  }
 
}
