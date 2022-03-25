import { Component, OnInit } from '@angular/core';
import { BabyClothingDetails } from '../models/babyclothingdetails';
import { BabyclothingService } from '../services/products/babyclothing.service';

@Component({
  selector: 'app-babyclothing',
  templateUrl: './babyclothing.component.html',
  styleUrls: ['./babyclothing.component.css']
})
export class BabyclothingComponent implements OnInit {
 babyclothing!:BabyClothingDetails;
 babyclothings:BabyClothingDetails []=[]
  constructor(private bc:BabyclothingService) { }

  ngOnInit(): void {
    this.babyclothings=this.bc.getALl();
  }

}
