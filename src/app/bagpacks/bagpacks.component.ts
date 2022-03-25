import { Component, OnInit } from '@angular/core';
import { BagPackDetails } from '../models/bagpacks';
import { BagpackService } from '../services/products/bagpack.service';

@Component({
  selector: 'app-bagpacks',
  templateUrl: './bagpacks.component.html',
  styleUrls: ['./bagpacks.component.css']
})
export class BagpacksComponent implements OnInit {
  bagpack!:BagPackDetails;
  bagpacks:BagPackDetails []=[]
  constructor(private bg:BagpackService) { }

  ngOnInit(): void {
    this.bagpacks=this.bg.getALl();
  }

}
