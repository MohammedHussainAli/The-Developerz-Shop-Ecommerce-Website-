import { Component, OnInit } from '@angular/core';
import { HoodieDetails } from '../models/hoodiedetails';
import { HoodieService } from '../services/products/hoodie.service';

@Component({
  selector: 'app-hoodies',
  templateUrl: './hoodies.component.html',
  styleUrls: ['./hoodies.component.css']
})
export class HoodiesComponent implements OnInit {
  hoodie!:HoodieDetails;
  hoodies:HoodieDetails []=[]
  constructor(private hd:HoodieService) { }

  ngOnInit(): void {
    this.hoodies=this.hd.getALl();
  }

}
