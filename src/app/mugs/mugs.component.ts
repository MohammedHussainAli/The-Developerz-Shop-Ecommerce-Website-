import { Component, OnInit } from '@angular/core';
import { MugDetails } from '../models/mugdetails';
import { CartService } from '../services/cart.service';
import { MugsService } from '../services/products/mugs.service';

@Component({
  selector: 'app-mugs',
  templateUrl: './mugs.component.html',
  styleUrls: ['./mugs.component.css']
})
export class MugsComponent implements OnInit {
 mug!:MugDetails;
 mugs:MugDetails []=[]

  constructor(private mg:MugsService, private cartService:CartService) { }

  ngOnInit(): void {
    this.mugs = this.mg.getALl();
  }

}
