import { Component, OnInit } from '@angular/core';
import { WallartDetails } from '../models/wallartdetails';
import { CartService } from '../services/cart.service';
import { WallartsService } from '../services/products/wallarts.service';

@Component({
  selector: 'app-wallarts',
  templateUrl: './wallarts.component.html',
  styleUrls: ['./wallarts.component.css']
})
export class WallartsComponent implements OnInit {
  wallart!:WallartDetails;
  wallarts:WallartDetails []=[]
  constructor(private wal:WallartsService, private cartService:CartService) { }

  ngOnInit(): void {
    this.wallarts = this.wal.getALl();
  }

}
