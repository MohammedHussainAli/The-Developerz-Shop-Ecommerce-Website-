import { Component, OnInit } from '@angular/core';
import { FaceMaskDetails } from '../models/facemaskdetails';
import { CartService } from '../services/cart.service';
import { FacemasksService } from '../services/products/facemasks.service';



@Component({
  selector: 'app-facemasks',
  templateUrl: './facemasks.component.html',
  styleUrls: ['./facemasks.component.css']
})
export class FacemasksComponent implements OnInit {
  facemask!:FaceMaskDetails;
  facemasks:FaceMaskDetails []=[]
  constructor(private fm:FacemasksService, private cartService:CartService) { }

  ngOnInit(): void {
    this.facemasks = this.fm.getALl();
  }

}
