import { Component, OnInit } from '@angular/core';
import { StickerDetails } from '../models/stickerdetails';
import { CartService } from '../services/cart.service';
import { StickersService } from '../services/products/stickers.service';


@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {
  sticker!:StickerDetails;
  stickers:StickerDetails []=[]
  constructor(private stk:StickersService, private cartService:CartService) { }

  ngOnInit(): void {
    this.stickers = this.stk.getALl();
    
  }

}
