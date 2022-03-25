import { Component, OnInit } from '@angular/core';
import { SweatshirtDetails } from '../models/seatshirtdetails';
import { SweatshirtsService } from '../services/products/sweatshirts.service';

@Component({
  selector: 'app-sweatshirts',
  templateUrl: './sweatshirts.component.html',
  styleUrls: ['./sweatshirts.component.css']
})
export class SweatshirtsComponent implements OnInit {
  sweatshirt!:SweatshirtDetails;
  sweatshirts:SweatshirtDetails []=[]
  constructor(private st:SweatshirtsService) { }

  ngOnInit(): void {
    this.sweatshirts = this.st.getALl();
  }

}
